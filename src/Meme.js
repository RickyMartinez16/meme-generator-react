import React, {useState} from "react";
import memesData from "./memesData.js"
import "./meme.css"


function Meme(){

    
    const [formData, setFormData] = useState({
        topText: "",
        bottomText: ""
    })


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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                [name]: value
            })
        })
    }

    


    return(
        <div className="main">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    >
                </input>
                <input 
                    type="text"  
                    placeholder="bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    >
                </input>
                <button 
                    onClick={getMemeImage} 
                    className="button">
                    Get New Meme Image
                </button>
                <div className="meme">
                    <img src={meme.randomImage} alt="meme" className="meme-image" />
                    <h2 className="meme-topText">{meme.topText}</h2>
                    <h2 className="meme-bottomText">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}

export default Meme