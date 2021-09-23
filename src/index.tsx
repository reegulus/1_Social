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
                 state={store._state}
                 addPost={store._addPost.bind(store)}
                 changeNewPostText={store._changeNewPostText.bind(store)}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>, document.getElementById('root')
    );
}


store.subscriber(rerender)
rerender()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
