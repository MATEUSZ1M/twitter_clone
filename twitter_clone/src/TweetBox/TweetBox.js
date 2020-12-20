import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/3032833575/a20600fd343b9ef5f850dee63df66c78_400x400.jpeg" />
          <input type="text" placeholder="What`s happening" />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
