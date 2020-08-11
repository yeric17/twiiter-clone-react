import React from 'react'
import {useState} from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core"
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Diana Hernandez",
            username: "dinahernandez072",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/07/25/Recortada/img_msanoja_20160801-194152_imagenes_lv_getty_istock_77607221_small-k0hH--656x437@LaVanguardia-Web.jpg"
        })
        setTweetMessage("")
        setTweetImage("")
    }

    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/07/25/Recortada/img_msanoja_20160801-194152_imagenes_lv_getty_istock_77607221_small-k0hH--656x437@LaVanguardia-Web.jpg" />
                    <input
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="¿Qué está pasando?"
                    type="text"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                     placeholder="Opcional: Ingresar URL de la imagen" 
                     type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox