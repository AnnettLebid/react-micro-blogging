import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TweetForm from "../TweetForm/TweetForm";
import TweetList from "../TweetsList/TweetsList";
import Loader from "../Loader/Loader"
import { getTweets } from "../lib/api";
import { createTweet } from "../lib/api";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
    };
    console.log(this.state.loading);
  }

  handleOnNewTweet(newTweet) {    
    this.setState({ loading: true });   
    createTweet(newTweet).then((response) => {
      this.setState({
        tweets: [newTweet, ...this.state.tweets],
        loading: false,
      });
    });
    console.log(this.state.loading);
   
  }

  componentDidMount() {
    getTweets().then((response) => {
      const { data } = response;
      this.setState({ tweets: data.tweets });
    });
  }

  render() {
    const { tweets, loading } = this.state;

    return (
      <Container className="p-5">
        <Row className="justify-content-center">         
          <Col xs={12} s = {12} md={11} lg = {7}>
            <TweetForm
              handleOnNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)}            
            />
            {loading && <Loader />}
            <TweetList tweets={tweets} />
            </Col>       
        </Row>
      </Container>
    );
  }
}
