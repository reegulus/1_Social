import React from "react";
import style from './Profile.module.css'

export function Profile() {
    return (
        <div className={style.profile}>
            <div>
                <img src="https://miro.medium.com/max/750/1*sEMf5p6Gk3-zFjxeCB3aRw.jpeg" alt=""/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        Post 1
                    </div>
                    <div className={style.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}