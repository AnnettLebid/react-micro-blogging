import React from "react";

export default class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: {
        text: "",
        name: "",
        date: "",
      },     
      disableButton: false,
      maxLength: false,    
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("I work");
    if (!this.state.text) {
      return;
    }
    
    this.props.handleOnNewTweet({
      text: this.state.text,
      name: "Anna Lebid",
      date: new Date().toISOString(),
      id: Date.now(),
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    const numbOfChar = event.target.value.length;    
    if (numbOfChar > 140) {
      this.setState({
        disableButton: true,
        maxLength: true,
      });
    }      
  }

  render() {
  const { disableButton, maxLength } = this.state;

    return (
      <form
        className="tweet-form"
        onSubmit={(event) => this.handleOnSubmit(event)}
      >
        <textarea
          name="message"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          className="tweet-input"
          rows="5"
          cols="40"
          placeholder="What you have in mind..."
        />
        <button name="submit" className=" button btn-primary"
        aria-disabled="true"
        disabled={disableButton}>             
          Tweet
        </button>
        {(maxLength)  && 
          <div className="alert alert-danger alert-box" role="alert">
            The tweet can't contain more then 140 chracters!
          </div>
        }
      </form>      
    );
  }
}
