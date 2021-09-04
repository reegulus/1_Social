import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsItemPropsType = {
    id: number
    name: string
}

function DialogsItem(props: DialogsItemPropsType) {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


type MessagePropsType = {
    message: string
}
function Message(props: MessagePropsType) {
    return(
        <div className={style.message}>
            {props.message}
        </div>
    )
}

export function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItem name={'Jacob'} id={1}/>
                <DialogsItem name={'William'} id={2}/>
                <DialogsItem name={'Ethan'} id={3}/>
                <DialogsItem name={'Michael'} id={4}/>
                <DialogsItem name={'Harry'} id={5}/>
            </div>
            <div className={style.messages}>
                <Message message={'I like to read books.'}/>
                <Message message={"My car won\'t start."}/>
                <Message message={'They say, the winter will be cold.'}/>
                <Message message={' It seems that you have made a rude mistake.'}/>
                <Message message={'Dad has come!'}/>
                </div>
            </div>
    )
}