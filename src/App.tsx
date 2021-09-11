import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"app_profile"}>
                <Route path={"/profile"} render = { () =>
                    <Profile profilePage={props.state.profilePage}/>}/>
                <Route path={"/dialogs"} render = { () =>
                    <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path={"/news"} render = { () => <News/>}/>
                <Route path={"/music"} render = { () => <Music/>}/>
                <Route path={"/settings"} render = { () => <Settings/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
