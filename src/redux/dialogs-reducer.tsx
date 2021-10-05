import {ActionsTypes, DialogsPageType} from "./state";


export const changeNewMessageTextAC = (newMessage: string) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT', newMessage: newMessage}) as const

export const newSendMessageTextAC = (newSendMessage: string) => ({
 type: 'SEND-MESSAGE', newSendMessage: newSendMessage
    }) as const


export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state
        case "SEND-MESSAGE":
            state.newMessageText = ""
            state.messages.push({id: 6, message: action.newSendMessage})
            return state
        default:
            return state
    }
}