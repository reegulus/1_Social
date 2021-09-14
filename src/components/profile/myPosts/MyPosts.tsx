import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts
        .map(p => <Post
            message={p.message}
            likesCount={p.likesCount}/>
        )
    let newPostElement: any = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add
                    </button>
                </div>
            </div>
            <div className={style.post}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

