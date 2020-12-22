import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "./Post.css";

function Post({avatar,verified, displayName, userName, text, image}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__badge">
               {verified && <VerifiedUserIcon />}
              </span>
              <span className="post__badgeName">@{userName}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img
            className="post__img"
            src={image}
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
