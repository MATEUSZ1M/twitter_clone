import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/3032833575/a20600fd343b9ef5f850dee63df66c78_400x400.jpeg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Jułka z Tłitera
              <span className="post__badge">
                <VerifiedUserIcon />
              </span>
              <span className="post__badgeName">@jułka_twiter</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Ja pierdole to jest literalnie gwałt. Jebane incele aktualnie
              ignourją opinie kobiet.
            </p>
          </div>
          <img
            className="post__img"
            src="http://obrazki.ulub.pl/49p/93bbc6546db1db5006b096ac/cat-gif-find-share-on-giphy.gif"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
