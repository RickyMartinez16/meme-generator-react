import React, {useState, useEffect} from "react";
import "./meme.css"


function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    })

    function getMemeImage(){        //handle click function
        const memesArray = allMemeImages    
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