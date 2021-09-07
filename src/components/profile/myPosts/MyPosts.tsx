import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {

    let posts = [
        {post: "How is it going?", likesCount: '50k'},
        {post: "What have you been up to?", likesCount: '150k'},

    ]
    let postsElements = posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

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