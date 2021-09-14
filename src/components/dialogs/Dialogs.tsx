import React from "react";
import style from './Dialogs.module.css'
import {DialogsItem} from "./dialogItem/DialogsItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
let newMessageElements: any = React.createRef()

let addMessage = () => {
        let textMessage = newMessageElements.current.value
        alert(textMessage)
    }
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
                <div>
                    <div>
                        <textarea ref={newMessageElements}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}