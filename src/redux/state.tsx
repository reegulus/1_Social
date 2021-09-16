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
    postMessage: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "How is it going?", likesCount: 50},
            {id: 2, message: "What have you been up to?", likesCount: 150},

        ],
        postMessage: ''
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

}

export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postMessage = ""
    state.profilePage.posts.push(newPost)
}