import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Squash as Hamburger } from 'hamburger-react'
import './nav.css';

export default function Navagation() {
    
    const useToggle = (initialValue = false) => {
        const [isOpen, setOpen] = useState(initialValue)
        const toggle = React.useCallback(() => {
            setOpen(v => !v);
        }, []);
        return [isOpen, toggle];
    }

    const [isOpen, toggleIsOn] = useToggle()

    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link className="navbar-brand" to="/">
                <img src="J! Logo.png" width="30" height="30" className="d-inline-black align-top logo" alt="" />
                Joseph Kennemer
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Hamburger toggled={isOpen} toggle={toggleIsOn} label='show menu' size={26}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 1 : null} to='/reel'><i className="far fa-play-circle"></i> Reel</Nav.Link>
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 2 : null} to='/projects'><i className="fas fa-film"></i> Projects</Nav.Link>
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 3 : null} to='/about'><i className="fas fa-user-alt"></i> About Me</Nav.Link>
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 4 : null} to='/services'><i class="fas fa-hand-holding-heart"></i> Services</Nav.Link>
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 5 : null} to='/contact'><i className="fas fa-comment"></i> Contact</Nav.Link>
                <Nav.Link onClick={toggleIsOn} as={NavLink} eventKey={window.innerWidth < 990 ? 6 : null} to='/testimonials'><i className="fas fa-star"></i> Testimonials</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
    )
};