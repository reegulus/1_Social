import React from "react";
import style from './Message.module.css'

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}