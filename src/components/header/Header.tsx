import React from "react";
import style from './Header.module.css'

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.header_logo}>
                <img src="https://pbs.twimg.com/profile_images/862315476394926081/EP-mjSh9.jpg" alt=""/>
                <h2>Web Dev</h2>
            </div>
        </div>
    )
}