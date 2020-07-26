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
  }

  render() {
const { tweets } = this.state;

    return (
      <Container className="p-5">
        <Row className="justify-content-md-center">
          <Col>
            <TweetForm
              handleOnNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)}
            />
            <TweetList tweets = {tweets}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const mockedData = [
//   { text: "1", name: "Anna Lebid", date: "1" },
//   { text: "2", name: "Anna Lebid", date: "2" },

//   { text: "3", name: "Anna Lebid", date: "3" },

//   { text: "4", name: "Anna Lebid", date: "4" },

//   { text: "5", name: "Anna Lebid", date: "5" },
// ];
