import React from "react";
import style from './Message.module.css'

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={style.messages}>
            <div className={`${style.message} ${style.active}`}>
                {props.message}
            </div>
        </div>
    )
}