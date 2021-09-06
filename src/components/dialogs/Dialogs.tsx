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

    let dialogs = [
        {id: 1, name: 'Jacob'},
        {id: 2, name: 'William'},
        {id: 3, name: 'Ethan'},
        {id: 4, name: 'Michael'},
        {id: 5, name: 'Harry'}
    ]
    let messages = [
        {id: 1, message: 'I like to read books.'},
        {id: 2, message: "My car won\'t start."},
        {id: 3, message: 'They say, the winter will be cold.'},
        {id: 4, message: ' It seems that you have made a rude mistake.'},
        {id: 5, message: 'Dad has come!'},
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogsItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogsItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogsItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogsItem name={dialogs[4].name} id={dialogs[4].id}/>

            </div>
            <div className={style.messages}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message={messages[3].message}/>
                <Message message={messages[4].message}/>
                </div>
            </div>
    )
}