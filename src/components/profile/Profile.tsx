import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={style.profile}>
           <ProfileInfo/>

            <MyPosts/>
        </div>
    )
}