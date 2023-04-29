import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="/">J.Y Store</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup" eventKey={2}>SignUp</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;