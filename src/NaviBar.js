import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './vyst-tech.PNG';
import Nav from 'react-bootstrap/Nav'


const NaviBar =()=>{
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-center"
                />{' '} VYST TECH
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );   
}

export default NaviBar;