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

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id}/>)
    let newMessageElements: any = React.createRef()

    const addMessage = (e: any) => {
const newMessageText = e.currentTarget.value
        props.dispatch(changeNewMessageTextAC(newMessageText))
    }

    let changeSendMessage = () => {
        props.dispatch(newSendMessageTextAC(newMessageText))
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
                        <textarea onChange={changeSendMessage} ref={newMessageElements}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}