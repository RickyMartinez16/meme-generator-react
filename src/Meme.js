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
        const {name, value} = event.targeet
        setFormData(prevText => {
            return ({
                ...prevText,
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
                    value={formData.topText}
                    onChange={handleChange}
                    >
                </input>
                <input 
                    type="text"  
                    placeholder="bottom text"
                    className="form-input"
                    name="bottomText"
                    value={formData.bottomText}
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
                    <h2 className="meme-topText">{formData.topText}</h2>
                    <h2 className="meme-bottomText">{formData.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}

export default Meme