import React from "react";
import style from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

export function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                   <NavLink to={'/dialogs/1'}> Jacob</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/2'}>William</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/3'}>  Ethan</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/4'}>Michael</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to={'/dialogs/5'}>  Harry</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    I like to read books.
                </div>
                <div className={style.message}>
                    My car won't start.
                </div>
                <div className={style.message}>
                    They say, the winter will be cold.
                </div>
                <div className={style.message}>
                    It seems that you have made a rude mistake.
                </div>
                <div className={style.message}>
                    Dad has come!
                </div>
            </div>
        </div>
    )
}