import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <div className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <p/>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Message</NavLink>
            </div>
            <p/>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <p/>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <p/>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <p/>
        </div>
    )
}