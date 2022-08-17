import React from "react";
import "./meme.css"

function Meme(){
    return(
        <div className="main">
            <form className="form">
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
            </form>
        </div>
    )
}

export default Meme