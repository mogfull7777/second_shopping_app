import React from 'react';
import {Col, Collapse, Container, Nav, Navbar, Row} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href={"/"}>
                    JY Store
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={"ml-auto"}>
                        <Nav.Link href={"/login"}>Login</Nav.Link>
                        <Nav.Link href={"/signup"}>Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;