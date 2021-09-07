import React from "react";
import style from './Dialogs.module.css'
import { DialogsItem } from "./dialogItem/DialogsItem";
import {Message} from "./message/Message";

export function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Jacob'},
        {id: 2, name: 'William'},
        {id: 3, name: 'Ethan'},
        {id: 4, name: 'Michael'},
        {id: 5, name: 'Harry'}
    ]
    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)


    let messages = [
        {id: 1, message: 'I like to read books.'},
        {id: 2, message: "My car won\'t start."},
        {id: 3, message: 'They say, the winter will be cold.'},
        {id: 4, message: ' It seems that you have made a rude mistake.'},
        {id: 5, message: 'Dad has come!'},
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={style.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
}