import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state"

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (newPostText: string)=> void
    changeNewPostText: (newText: string)=> void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                changeNewPostText={props.changeNewPostText}
            />
        </div>
    )
}