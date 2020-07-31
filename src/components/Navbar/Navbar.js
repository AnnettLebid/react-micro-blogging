import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>         
            <div className="navbar">
              <Link className="home-menu" to="/">
                Home
              </Link>
              <Link className="profile-menu" to="/profile">
                Profile
              </Link>
            </div>       
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
