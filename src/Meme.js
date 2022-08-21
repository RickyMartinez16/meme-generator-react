import React, {useState} from "react";
import memesData from "./memesData.js"
import "./meme.css"


function Meme(){

    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(){        //handle click function
        const memesArray = allMemeImages.data.memes     
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({     //setMeme takes the previous state and then returns an object with the previpus state but changes the image
            ...prevState,
            randomImage: url
        }))
    }


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
                <img src={meme.randomImage} alt="meme" className="meme-image" />
            </div>
        </div>
    )
}

export default Meme