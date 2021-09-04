import React from "react";
import style from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src="https://miro.medium.com/max/750/1*sEMf5p6Gk3-zFjxeCB3aRw.jpeg" alt=""/>
            </div>
            <div>
                Ava + description
            </div>
        </div>
    )
}