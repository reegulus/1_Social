import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state"

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string)=> void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
            />
        </div>
    )
}