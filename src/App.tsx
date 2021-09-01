import React from 'react';
import './App.css';


function App() {

    return (
        <div className="App">
            <header className={"header"}>
               <h2>Web Dev</h2>
            </header>
            <nav className={"nav"}>
                <div className={"nav-bar"}>
                    <div>
                        <a href="">Profile</a>
                    </div><p/>
                    <div>
                        <a href="">Message</a>
                    </div><p/>
                    <div>
                        <a href="">News</a>
                    </div><p/>
                    <div>
                        <a href="">Music</a>
                    </div><p/>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img src="https://miro.medium.com/max/750/1*sEMf5p6Gk3-zFjxeCB3aRw.jpeg" alt=""/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>

        </div>
    );
}

export default App;
