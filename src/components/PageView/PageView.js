import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateTweet from "../CreateTweet/CreateTweet";
import TweetList from "../TweetsList/TweetsList";
import Loader from "../Loader/Loader";
import TweetsContext from "../../TweetsContext";
import { db } from "../../../src/firebase";

const PageView = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [errorMessage, updateErromessage] = useState("");

  const handleOnNewTweet = (newTweet) => {
    updateLoading(true);
    const { content, date, userName } = newTweet;    
    db.collection("Tweets").add({ content, date, userName });    
  };

  useEffect(() => {
    loadTweetsFromDb();
    const interval = setInterval(() => {
      loadTweetsFromDb();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const loadTweetsFromDb = async () => {
    const data = await db.collection("Tweets").orderBy("date", "desc").get();
    setTweets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));   
    updateLoading(false); 
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
