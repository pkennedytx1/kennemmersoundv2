import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.css';

export default function Navagation() {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link className="navbar-brand" to="/">
                <img src="J! Logo.png" width="30" height="30" className="d-inline-black align-top logo" alt="" />
                Joseph Kennemer
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={NavLink} to='/reel'><i className="far fa-play-circle"></i> Reel</Nav.Link>
                <Nav.Link as={NavLink} to='/projects'><i className="fas fa-film"></i> Projects</Nav.Link>
                <Nav.Link as={NavLink} to='/about'><i className="fas fa-user-alt"></i> About Me</Nav.Link>
                <Nav.Link as={NavLink} to='/contact'><i className="fas fa-comment"></i> Contact</Nav.Link>
                <Nav.Link as={NavLink} to='/testimonials'><i className="fas fa-star"></i> Testimonials</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
};