import React from "react";
import style from "./Post.module.css";

export function Post() {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src="https://pbs.twimg.com/profile_images/862315476394926081/EP-mjSh9.jpg" alt=""/>
                Post
                <div>like</div>
            </div>
        </div>
    )
}