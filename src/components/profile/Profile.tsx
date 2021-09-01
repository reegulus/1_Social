import React from "react";
import './Profile.css'

export function Profile() {
    return (
        <div className={"profile"}>
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
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    )
}