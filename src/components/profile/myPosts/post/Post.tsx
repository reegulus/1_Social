import React from "react";
import style from "./Post.module.css";

export type PostTypeProps = {
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
