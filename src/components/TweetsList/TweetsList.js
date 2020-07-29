import React from "react";
import TweetsContext from "../../TweetsContext";

function TweetsList() {  

  return (
    <TweetsContext.Consumer>
      {({ tweets }) => (
        <ul className="list-style">
          {tweets.map((tweet) => (
            <li key={tweet.id || tweet.date}>
              <div className="tweet-box">
                <span className="date-position font-16-14 color-grey">
                  {tweet.date}
                </span>
                <span className="name-position font-16-14 color-grey">
                  {tweet.userName}
                </span>
                <span className="tweet-text font-16-14">{tweet.content}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </TweetsContext.Consumer>
  );
}

export default TweetsList;
