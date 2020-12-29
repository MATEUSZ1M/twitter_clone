import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from '../Firebase/firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet =(e)=> {
    e.preventDefault();

    db.collection('posts').add({
      avatar: 'https://pbs.twimg.com/profile_images/3032833575/a20600fd343b9ef5f850dee63df66c78_400x400.jpeg',
      displayName: 'Mateusz',
      image: tweetImage,
      text: tweetMessage,
      userName: 'matełko',
      verified: true
    });

    setTweetMessage('');
    setTweetImage('');
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/3032833575/a20600fd343b9ef5f850dee63df66c78_400x400.jpeg" />
          <input
            value={tweetMessage}
            onChange={(e)=> setTweetMessage(e.target.value)}
            type="text"
            placeholder="What`s happening"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e)=> setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          type="text"
          placeholder="Enter image URL"
        />
        <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
