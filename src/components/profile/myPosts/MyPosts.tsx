import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {
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
                <Post message={"How is it going?"} likesCount={'100k'}/>
                <Post message={"What have you been up to?"} likesCount={'50k'}/>
            </div>
        </div>
    )
}