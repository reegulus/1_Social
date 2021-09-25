import React from "react";
import style from "./Post.module.css";
import {PostType} from "../../../../redux/state";

export type PostTypeProps = {
    posts: Array<PostType>
}

export function Post(props: PostTypeProps) {
    return (
        <div className={style.posts}>
            {
                props.posts.map(p => {
                    return (
                        <div className={style.item} key={p.id}>
                            <img src="https://pbs.twimg.com/profile_images/862315476394926081/EP-mjSh9.jpg" alt=""/>
                            {p.message}
                            <div>like: {p.likesCount}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}
