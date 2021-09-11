import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map(p => <Post post={props.posts}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add</button>
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