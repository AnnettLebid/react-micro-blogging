import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateTweet from "../CreateTweet/CreateTweet";
import TweetList from "../TweetsList/TweetsList";
import Loader from "../Loader/Loader";
import { getTweets, createTweet } from "../lib/api";
import TweetsContext from "../../TweetsContext";
// import { getTweetsFromDb } from '../lib/firebaseApi';

const PageView = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [errorMessage, updateErromessage] = useState(""); 
 
  const handleOnNewTweet = (newTweet) => {
    updateLoading(true);
    createTweet(newTweet)
      .then((response) => {
        setTweets([response.data, ...tweets]);
        updateLoading(false);
      })
      .catch((err) => {
        updateErromessage(err.message);
        updateLoading(false);
      });     
  };

  useEffect(() => {
    // getTweetsFromDb();
    loadTweets();
    const interval = setInterval(() => {
      loadTweets();
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  const loadTweets = () => {
    getTweets().then((response) => {
      const { data } = response;      
      setTweets(data.tweets);
    });
  };

  return (
    <TweetsContext.Provider
      value={{
        tweets: tweets,
        handleNewTweet: handleOnNewTweet,
      }}
    >
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col xs={12} s={12} md={11} lg={7}>
            <CreateTweet />
            <div className="loader text-center">{loading && <Loader />}</div>
            {errorMessage && <h3 className="error"> {errorMessage} </h3>}
            <TweetList />
          </Col>
        </Row>
      </Container>
    </TweetsContext.Provider>
  );
};

export default PageView;
