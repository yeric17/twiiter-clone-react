import React from 'react'
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return(
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Buscar en Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>¿Qué esta ocurriendo?</h2>
                <TwitterTweetEmbed tweetId={"1292884049447596032"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Xbox"
                    options={{heigth:400}}
                />
                <TwitterShareButton
                    options={{text:"practica con react", via:"cleverqazi"}}
                />
            </div>
        </div>
    )
}

export default Widgets