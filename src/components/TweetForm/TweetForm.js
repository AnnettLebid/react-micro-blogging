import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: {
        content: "",
      },
      disableButton: false,
      maxLength: false,
      
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();    
    if (!this.state.content) {
      return;
    }
    this.props.handleOnNewTweet({
      content: this.state.content,
      date: new Date().toISOString(),
      userName: null,
      // id: Date.now(),
    });    
  }

  handleChange(event) {    
    this.setState({ content: event.target.value });
    const numbOfChar = event.target.value.length;
    if (numbOfChar > 140) {
      this.setState({
        disableButton: true,
        maxLength: true,
      });
    }
  }

  render() {
    const { disableButton, maxLength, loading } = this.state;  
    console.log() 

    return (
      <>
        <form
          className="tweet-form"
          onSubmit={(event) => this.handleOnSubmit(event)}
        >
          <textarea
            name="message"
            value={this.state.value}
            onChange={(event) => this.handleChange(event)}
            className="tweet-input"
            rows="4"
            cols="40"
            placeholder="What you have in mind..."
          />
          <div className = "display-flex text-right p-2">
          <button
            name="submit"
            className=" button btn-primary"
            aria-disabled="true"
            disabled={disableButton}
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
      </>
    );
  }
}
