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

  render() {
    return (
      <Container className="p-5">
        <Row className="justify-content-md-center">
          <Col>
            <TweetForm />
            <TweetList />
          </Col>
        </Row>
      </Container>
    );
  }
}
