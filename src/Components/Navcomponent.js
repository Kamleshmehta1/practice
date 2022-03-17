import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./mycss.css"

function Navcomponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className='link-to-web'>home</Link>
                        <Link to="/contact" className='link-to-web'>contact</Link>
                        <Link to="/Hellow" className='link-to-web'>hellow</Link>
                        <Link to="/lock" className='link-to-web'>nopage</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navcomponent