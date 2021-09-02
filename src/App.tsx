import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";


function App() {

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"app_profile"}>
                {/*<Profile/>*/}
                <Dialogs/>

            </div>


        </div>
    );
}

export default App;
