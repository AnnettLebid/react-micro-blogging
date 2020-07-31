import React from "react";

const Tweet = ({ date, userName, id, content }) => {
  return (
    <div className="tweet-box">
      <span className="date-position font-16-14 color-grey">{date}</span>
      <span className="name-position font-16-14 color-grey">{userName}</span>
      <span className="tweet-text font-16-14">{content}</span>
    </div>
  );
};

export default Tweet;
