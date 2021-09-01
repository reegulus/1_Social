import React from "react";
import './Navbar.css'

export function Navbar() {
    return (
            <div className={"nav"}>
                <div className={"nav-bar"}>
                    <div>
                        <a href="">Profile</a>
                    </div>
                    <p/>
                    <div>
                        <a href="">Message</a>
                    </div>
                    <p/>
                    <div>
                        <a href="">News</a>
                    </div>
                    <p/>
                    <div>
                        <a href="">Music</a>
                    </div>
                    <p/>
                </div>
            </div>
    )
}