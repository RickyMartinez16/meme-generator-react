import React, {useState} from "react";
import memesData from "../memesData.js"
import "./meme.css"

function Meme(){
    return(
        <div className="main">
            <div className="form">
                <input 
                    type="text" 
                    name="top-text" 
                    placeholder="top text"
                    className="form-input">
                </input>
                <input 
                    type="text" 
                    name="bottm-text" 
                    placeholder="bottom text"
                    className="form-input">
                </input>
                <button className="button">Get New Meme Image</button>
            </div>
        </div>
    )
}

export default Meme