import React from "react";
import style from './MyPosts.module.css'
// import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map(p => <Post  message={p.message} likesCount={p.likesCount}/>)

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

type PostTypeProps = {
    message: string
    likesCount: number
}

export function Post(props: PostTypeProps) {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src="https://pbs.twimg.com/profile_images/862315476394926081/EP-mjSh9.jpg" alt=""/>
                {props.message}
                <div>like: {props.likesCount}</div>
            </div>
        </div>
    )
}