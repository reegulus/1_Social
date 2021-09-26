// let rerenderEntireTree = () => {}

let _onChange = () => {
    console.log("Yo")
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
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostAC | ChangeNewPostTextAC
export type AddPostAC = {
    type: 'ADD-POST'
    addNewPost: string
}
export type ChangeNewPostTextAC = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
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
            ]
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
    subscriber(observer: () => void) {
        this._onChange = observer
    },
    _onChange() {
    },
    getState() {
        return this._state
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost(action.addNewPost)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._changeNewPostText(action.newText)
        }

    }
}
