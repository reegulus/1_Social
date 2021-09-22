import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/state";
import App from "./App";

export function rerender() {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={store.getState()}
                 addPost={store.addPost}
                 changeNewPostText={store.changeNewPostText}
            />
        </React.StrictMode>, document.getElementById('root')
    );
}


store.subscribe(rerender)
rerender()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
