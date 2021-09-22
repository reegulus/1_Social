import {rerender} from "../index"
// let rerenderEntireTree = () => {}


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
    addPost: () => void
    onChange: () => void
    changeNewPostText: (newText: string) => void
    subscribe: (observer:()=> void) => void
    getState: ()=> RootStateType
}

export let store: StoreType = {
    _state:   {
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
    addPost () {
        const newPost: PostType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        rerender()
    },
    changeNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this.onChange()
    },
    subscribe (observer: ()=> void) {
        this.onChange = observer
    },
    onChange() {},
    getState() {
        return this._state
    }
}
