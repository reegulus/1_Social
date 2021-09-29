import React from "react";
import style from './Dialogs.module.css'
import {DialogsItem} from "./dialogItem/DialogsItem";
import {Message} from "./message/Message";
import {ActionsTypes, changeNewMessageTextAC, DialogsPageType, newSendMessageTextAC} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    changeNewMessageText: (newMessageText: string) => void
    sendMessage: (newSendMessage: string)=> void

}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)

    const messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id}/>)
    const newMessageElements = props.dialogsPage.newMessageText

    const onSendMessageClick = () => {
        props.dispatch(newSendMessageTextAC(newMessageElements))
    }

    let changeSendMessage = (e: any) => {
       const newMessageElements = e.currentTarget.value
        props.dispatch(changeNewMessageTextAC(newMessageElements))
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
                        <textarea value={newMessageElements} onChange={changeSendMessage} placeholder={'Enter your message'} ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}