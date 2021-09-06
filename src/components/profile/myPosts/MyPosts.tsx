import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {

    let posts = [
        {post: "How is it going?", likesCount:'50k'},
        {post: "What have you been up to?", likesCount:'150k'},
    ]
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
                <Post message={posts[0].post} likesCount={posts[0].likesCount}/>
                <Post message={posts[1].post} likesCount={posts[1].likesCount}/>
            </div>
        </div>
    )
}