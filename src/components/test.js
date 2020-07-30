import React from "react";
import TweetsContext from "../../TweetsContext";

export default class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // newTweet: {
      content: "",
      disableButton: false,
      maxLength: false,
    };
  }

  // static contextType = TweetsContext;

  handleOnSubmit(event) {
    event.preventDefault();
    if (!this.state.content) {
      return;
    }    
    // this.contextType.handleNewTweet({
      this.props.handleOnNewTweet({
      content: this.state.content,
      date: new Date().toISOString(),
      userName: JSON.parse(window.localStorage.getItem("userName")),      
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
          rows="4"
          cols="40"
          placeholder="What you have in mind..."
        />
        <div className="display-flex text-right p-2">
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
    );
  }
}



import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TweetForm from "../TweetForm/TweetForm";
import TweetList from "../TweetsList/TweetsList";
import Loader from "../Loader/Loader";
import { getTweets } from "../lib/api";
import { createTweet } from "../lib/api";
import TweetsContext from "../../TweetsContext";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      errorMessage: "",
      interval: null,
    };
  }

  handleOnNewTweet(newTweet) {
    this.setState({ loading: true });
    createTweet(newTweet)
      .then((response) => {
        this.setState({
          tweets: [newTweet, ...this.state.tweets],
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message, loading: false });
      });
  }

  componentDidMount() {
    this.loadTweets();
    // this.interval 
  }

  loadTweets() {
    getTweets().then((response) => {
      const { data } = response;
      this.setState({ tweets: data.tweets });
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <TweetsContext.Provider
        value={{
          tweets: this.state.tweets,
          handleNewTweet: this.handleOnNewTweet,
        }}
      >
        <Container className="p-5">
          <Row className="justify-content-center">
            <Col xs={12} s={12} md={11} lg={7}>
            {(value) => (
                  // value = {{
         // tweets: this.state.tweets,
        //  handleNewTweet: this.handleOnNewTweet,
       // }
                  <TweetForm />


                )}
              <div className="loader text-center">{loading && <Loader />}</div>
              {this.state.errorMessage && (
                <h3 className="error"> {this.state.errorMessage} </h3>
              )}
              <TweetList />
            </Col>
          </Row>
        </Container>
      </TweetsContext.Provider>
    );
  }
}
