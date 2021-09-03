import React from "react";
import style from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Jacob
                </div>
                <div className={style.dialog}>
                    William
                </div>
                <div className={style.dialog}>
                    Ethan
                </div>
                <div className={style.dialog}>
                    Michael
                </div>
                <div className={style.dialog}>
                    Harry
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