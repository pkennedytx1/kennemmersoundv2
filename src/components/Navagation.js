import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.css';

export default function Navagation() {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link class="navbar-brand" to="/">
                <img src="J! Logo.png" width="30" height="30" class="d-inline-black align-top logo" alt="" />
                Joseph Kennemer
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} eventKey="1" to='/reel'><i class="far fa-play-circle"></i> Reel</Nav.Link>
                <Nav.Link as={Link} eventKey="2" to='/projects'><i class="fas fa-film"></i> Projects</Nav.Link>
                <Nav.Link as={Link} eventKey="3" to='/about'><i class="fas fa-user-alt"></i> About Me</Nav.Link>
                <Nav.Link as={Link} eventKey="4" to='/contact'><i class="fas fa-comment"></i> Contact</Nav.Link>
                <Nav.Link as={Link} eventKey="5" to='/testimonials'><i class="fas fa-star"></i> Testimonials</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
};