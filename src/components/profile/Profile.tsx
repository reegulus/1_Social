import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export function Profile() {
    return (
        <div className={style.profile}>
            <div>
                <img src="https://miro.medium.com/max/750/1*sEMf5p6Gk3-zFjxeCB3aRw.jpeg" alt=""/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    )
}