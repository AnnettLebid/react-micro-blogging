import React from "react";

export default class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: {
        text: "",
        id: "",
        date: "",
      },
    };
  }

  render() {
    return (    
        <form className="tweet-form">
          <textarea
            name="message"
            className="tweet-input"
            rows="5"
            cols="40"        
            placeholder="What you have in mind"
          />
          <button          
            name="submit"
            className="btn-primary button"
          > Tweet
          </button>
          <div
            className="alert alert-danger alert-box"
            role="alert"            
          >
            The tweet can't contain more then 140 chracters!
          </div>
        </form>      
    );
  }
}
