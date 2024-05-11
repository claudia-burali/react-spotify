import React, { useState } from 'react';
import { Navbar, Nav, Button, InputGroup, Form } from 'react-bootstrap';
import logo from '../assets/logo/logo.png';
import { fillMusicSection } from '../redux/actions';
import { useDispatch } from 'react-redux';

const SpotifySidebar = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fillMusicSection(query))
  }
  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <Nav.Link href="#">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Nav.Link>
              <InputGroup className="mt-3">
                <Form.Control type="text" placeholder="Search" aria-label="Search" value={query} 
              onChange={handleChange}/>
                <Button onClick={handleSubmit} variant="outline-secondary">GO</Button>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">Sign Up</Button>
          <Button className="login-btn" type="button">Login</Button>
          <div><a href="#a">Cookie Policy</a> | <a href="#b">Privacy</a></div>
        </div>
      </Navbar>
    </aside>
  );
}

export default SpotifySidebar;
