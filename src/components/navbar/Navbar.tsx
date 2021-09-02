import React from "react";
import style from './Navbar.module.css'

export function Navbar() {
    return (
        <div className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a href={"/profile"}>Profile</a>
            </div>
            <p/>
            <div className={style.item}>
                <a href={"/dialogs"}>Message</a>
            </div>
            <p/>
            <div className={style.item}>
                <a href={"/news"}>News</a>
            </div>
            <p/>
            <div className={style.item}>
                <a href={"/music"}>Music</a>
            </div>
            <p/>
            <div className={style.item}>
                <a href={"/settings"}>Settings</a>
            </div>
            <p/>
        </div>
    )
}