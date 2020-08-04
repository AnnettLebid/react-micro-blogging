import React, { useState, useContext } from "react";
import TweetsContext from "../../TweetsContext";

const CreateTweet = () => {
  const [newContent, setNewContent] = useState("");
  const [disabledButton, updateDisabledButton] = useState(false);
  const [maxLength, updateMaxLength] = useState(false);

  const context = useContext(TweetsContext); 

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!newContent) {
      return;
    }
    context.handleNewTweet({
      content: newContent,
      date: new Date().toISOString(),
      userName: JSON.parse(window.localStorage.getItem("userName")),      
    });
    setNewContent("");
  };

  const handleChange = (event) => {
    setNewContent(event.target.value);
    const numbOfChar = event.target.value.length;
    if (numbOfChar > 140) {
      updateMaxLength(true);
      updateDisabledButton(true);
    }
  };

  return (
    <form className="tweet-form" onSubmit={handleOnSubmit}>
      <textarea
        name="message"
        value={newContent}
        onChange={handleChange}
        className="tweet-input"
        rows="4"
        cols="40"
        placeholder="What you have in mind..."
      />
      <div className="display-flex text-right p-2">
        <button
          name="submit"
          className=" button btn-primary"
          aria-disabled="true"
          disabled={disabledButton}
        >
          Tweet
        </button>
      </div>
      {maxLength && (
        <div className="alert alert-danger alert-box" role="alert">
          The tweet can't contain more then 140 chracters!
        </div>
      )}
    </form>
  );
};

export default CreateTweet;
