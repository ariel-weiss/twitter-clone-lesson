import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Ariel Weiss',
            userName: 'WeWe',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://vrcmods.com/imgs/f4vb3icSoMUn.jpg',

        })

        setTweetMessage("");
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://vrcmods.com/imgs/f4vb3icSoMUn.jpg" />
                    <input  onChange={(e) => setTweetMessage(e.target.value)}
                            value={tweetMessage}
                            placeholder="What's new?" type="text" />
                </div>

                <div className="tweetBox__imageInput">
                    <input  onChange={(e) => setTweetImage(e.target.value)}
                            value={tweetImage}
                            placeholder="Enter image URL" type="text" />
                </div>
                
                <Button onClick={sendTweet}
                        className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
