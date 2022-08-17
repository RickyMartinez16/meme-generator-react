import React from "react"
import troll from "./21113569efe0da57572ae2260226a262.jpeg"
import "./header.css"

function Header(){
    return(
        <div>
            <header className="header">
                <img src={troll} alt="troll face" className="troll-logo"/>
                <h2 className="header-title">Meme Generator</h2>
                <h3 className="header-small">React Course - Project 3</h3>
            </header>
        </div>
    )
}

export default Header