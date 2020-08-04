import React from "react";
import TweetsContext from "../../TweetsContext";
import Tweet from "../Tweet/Tweet";

function TweetsList() {
  return (
    <TweetsContext.Consumer>
      {({ tweets }) => (        
        <ul className="list-style">
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              <Tweet {...tweet} />
            </li>
          ))}
        </ul>
      )}
    </TweetsContext.Consumer>
  );
}

export default TweetsList;
