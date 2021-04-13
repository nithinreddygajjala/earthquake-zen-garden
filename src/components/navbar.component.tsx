import { Navbar, Nav, Container } from 'react-bootstrap';
import  React,  { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.component.css';
const Navigation = ({profileData}) => {
    return (<div>
      <Navbar bg="light" variant="light">
  <Nav className="container-fluid">
    <Nav.Item>
      <Navbar.Brand as={Link} to="/"><img className="logo" src={`/src/components/realtor-com.png`}></img></Navbar.Brand>
    </Nav.Item>
    <Nav.Item className="ml-auto">
      <Nav.Link as={Link} to="/user-list">Earthquake Zen Garden</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ml-auto">
    <Link to ={{ pathname: '/profile', state: { foo: 'bar'} }}><h6><u>Welcome {profileData.firstName}</u></h6></Link>
    </Nav.Item>
  </Nav>
</Navbar>
        </div>);
}

export default Navigation;