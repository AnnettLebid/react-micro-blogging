import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TweetForm from "../TweetForm/TweetForm";
import TweetList from "../TweetsList/TweetsList";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  handleOnNewTweet(newTweet) {
    this.setState((state) => {
      return {
        tweets: [newTweet, ...state.tweets],
      };
    });
    localStorage.setItem("tweets", JSON.stringify(this.state.tweets));   
  }

  componentDidMount() {        
    const savedTweets = JSON.parse(window.localStorage.getItem("tweets"));
    if (savedTweets) {
      this.setState(() => {
        return {
          tweets: savedTweets,
        };
      });
    }
  }

  render() {
    const { tweets } = this.state;

    return (
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col>
            <TweetForm
              handleOnNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)}
            />
            <TweetList tweets={tweets} />
          </Col>
        </Row>
      </Container>
    );
  }
}
