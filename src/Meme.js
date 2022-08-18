import React, {useState} from "react";
import memesData from "./memesData.js"
import "./meme.css"

const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
}

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
                <button onClick={getMemeImage} className="button">Get New Meme Image</button>
                <img src={memeImage} alt="meme" className="meme-image" />
            </div>
        </div>
    )
}

export default Meme