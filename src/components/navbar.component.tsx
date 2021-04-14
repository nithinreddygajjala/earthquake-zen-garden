import { Navbar, Nav } from 'react-bootstrap';
import  React from 'react';
import { Link } from 'react-router-dom';

import './navbar.component.css';
const Navigation = ({Data}) => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="container-fluid">
        <Nav.Item>
          <Navbar.Brand as={Link} to="/"><img className="logo" src={Data.site.logoImage}></img></Navbar.Brand>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <h2>Earthquake Zen Garden</h2>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Link to={{ pathname: '/profile', state: { foo: 'bar' } }}><h6><u>Welcome {Data.profile.firstName}</u></h6></Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    );
}

export default Navigation;