import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()



    let addPost = () => {
        props.addPost(props.newPostText)
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.changeNewPostText(text)
        }
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div className={style.post}>
                {/*{postsElements}*/}
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}

