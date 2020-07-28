import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (!this.state.userName) {
      return;
    }
    localStorage.setItem("userName", JSON.stringify(this.state.userName));
    this.setState = {
      userName: "",
    };
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="col-6 offset-3 white">
        <div className="flex mt-5 profile-header">
          <h1>Profile</h1>
        </div>
        <Form onSubmit={(event) => this.handleOnSubmit(event)}>
          <Form.Group controlId="formBasic">
            <div className="flex">
              <Form.Label className="profile-user-name">User Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              value={this.state.value}
              onChange={(event) => this.handleChange(event)}
            />
            <div className="flex text-right mt-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UserProfile;
