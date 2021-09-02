import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div className={style.post}>
                <Post/>
            </div>
        </div>
    )
}