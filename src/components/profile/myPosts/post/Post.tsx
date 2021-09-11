import React from "react";
import style from "./Post.module.css";
import {PostType} from "../../../../redux/state";

type PostTypeProps = {
    post: Array<PostType>
}

export function Post(props: PostTypeProps) {
    return (
        <div className={style.item}>
            {
                props.post.map(l => {
                    return(
                        <div key={l.id}>
                            <img src="https://pbs.twimg.com/profile_images/862315476394926081/EP-mjSh9.jpg" alt=""/>
                            {props.post}
                            <div>like: {l.likesCount}</div>
                        </div>
                    )
                })}
            </div>
    )
}