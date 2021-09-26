import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    addPost: (addNewPost: string) => void
    changeNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {
            props.dispatch({type: 'ADD-POST', addNewPost: props.newPostText})
            props.changeNewPostText('')
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newText: text})
        }
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div className={style.post}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
}

