import React, { useState, useEffect } from "react";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import "./Feed.css";
import db from "../Firebase/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetBox */}

      <TweetBox />

      {/* post */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
