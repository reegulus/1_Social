import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state"

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (addNewPost: string)=> void
    changeNewPostText: (newText: string)=> void
    dispatch: (action: ActionsTypes)=> void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts
                addPost={props.addPost}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
                changeNewPostText={props.changeNewPostText}
            />
        </div>
    )
}