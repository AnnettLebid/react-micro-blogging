import React from "react";

function TweetsList(props) {
  const { tweets } = props;

  return (
    <ul className="list-style">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <div className = "tweet-box">
            <span className="date-position font-16-14 color-grey">{tweet.date}</span>
            <span className="name-position font-16-14 color-grey">{tweet.name}</span>
            <span className="tweet-text font-16-14">{tweet.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TweetsList;
