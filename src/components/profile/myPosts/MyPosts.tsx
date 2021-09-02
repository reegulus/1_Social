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
                <Post message={"How is it going?"} likesCount={'100k'}/>
                <Post message={"What have you been up to?"} likesCount={'50k'}/>
            </div>
        </div>
    )
}