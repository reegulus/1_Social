// let rerenderEntireTree = () => {}

let _onChange = () => {
    console.log("state")
}
export const subscriber = (observer: () => void) => {
    _onChange = observer
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: RootStateType
    _addPost: (addNewPost: string) => void
    _onChange: () => void
    _changeNewPostText: (newText: string) => void
    _changeNewMessageText: (newMessage: string) => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC> | ReturnType<typeof changeNewMessageTextAC>

export const addPostAC = (addNewPost: string) => {
    return {
        type: "ADD-POST",
        addNewPost: addNewPost
    } as const
}
export const changeNewPostTextAC = (newText: string)=> {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const changeNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "How is it going?", likesCount: 50},
                {id: 2, message: "What have you been up to?", likesCount: 150},

            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Jacob'},
                {id: 2, name: 'William'},
                {id: 3, name: 'Ethan'},
                {id: 4, name: 'Michael'},
                {id: 5, name: 'Harry'}
            ],

            messages: [
                {id: 1, message: 'I like to read books.'},
                {id: 2, message: "My car won\'t start."},
                {id: 3, message: 'They say, the winter will be cold.'},
                {id: 4, message: ' It seems that you have made a rude mistake.'},
                {id: 5, message: 'Dad has come!'},
            ],
            newMessageText: ''
        }

    },
    _addPost(addNewPost: string) {
        const newPost: PostType = {
            id: 3,
            message: addNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    _changeNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    _changeNewMessageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage
        this._onChange()
    },
    subscriber(observer: () => void) {
        this._onChange = observer
    },
    _onChange() {},

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost(action.addNewPost)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._changeNewPostText(action.newText)
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._changeNewMessageText(action.newMessage)
        }

    }
}
