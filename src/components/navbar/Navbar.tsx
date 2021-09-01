import React from "react";
import style from './Navbar.module.css'

export function Navbar() {
    return (
            <div className={style.nav}>
                    <div className={`${style.item} ${style.active}`}>
                        <a >Profile</a>
                    </div>
                    <p/>
                    <div className={style.item}>
                        <a>Message</a>
                    </div>
                    <p/>
                    <div className={style.item}>
                        <a>News</a>
                    </div>
                    <p/>
                    <div className={style.item}>
                        <a>Music</a>
                    </div>
                    <p/>
            </div>
    )
}