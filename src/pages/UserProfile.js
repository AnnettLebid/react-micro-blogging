import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserProfile = () => {
  const [userName, setUserName] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!userName) {
      return;
    }
    localStorage.setItem("userName", JSON.stringify(userName));
    setUserName("");
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="col-6 offset-3 white">
      <div className="flex mt-5 profile-header">
        <h1>Profile</h1>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasic">
          <div className="flex">
            <Form.Label className="profile-user-name">User Name</Form.Label>
          </div>
          <Form.Control
            type="text"
            value={userName}
            onChange={handleChange}
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
};

export default UserProfile;
