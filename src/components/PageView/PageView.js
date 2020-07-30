import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateTweet from "../CreateTweet/CreateTweet";
import TweetList from "../TweetsList/TweetsList";
import Loader from "../Loader/Loader";
import { getTweets } from "../lib/api";
import { createTweet } from "../lib/api";
import TweetsContext from "../../TweetsContext";

export default class PageView extends React.Component {
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
        this.setState((prevState) => {          
          return {
            tweets: [response.data, ...prevState.tweets],
            loading: false,
          };
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message, loading: false });
      });
  }

  componentDidMount() {
    this.loadTweets();
    this.interval = setInterval(() => {
      this.loadTweets();      
    },15000 )
    
  }

  loadTweets() {
    getTweets().then((response) => {
      const { data } = response;
      this.setState({ tweets: data.tweets });
    });
  }
  
  componentWillUnmount() {   
    clearInterval(this.interval);
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
              <CreateTweet
                handleOnNewTweet={(newTweet) => this.handleOnNewTweet(newTweet)}
              />
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
