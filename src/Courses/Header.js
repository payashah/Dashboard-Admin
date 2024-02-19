import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><span style={{ color: "chartreuse", fontSize: 30 }}>Paya</span> Accademy</Navbar.Brand>
                    <Nav className="me-auto" style={{ marginTop: 7 }}>
                        <Link to="/Courses" style={{ textDecoration: "none", marginLeft: 10, marginRight: 10, fontSize: 20 }}>Courses</Link>
                        <Link to="/Features" style={{ textDecoration: "none", marginLeft: 10, marginRight: 10, fontSize: 20 }}>Features</Link>
                        <Link to="/About" style={{ textDecoration: "none", marginLeft: 10, marginRight: 10, fontSize: 20 }}>About Us</Link>
                        <Link to="/Get" style={{ textDecoration: "none", marginLeft: 10, marginRight: 10, fontSize: 20 }}>Get</Link>
                        <Link to="/Post" style={{ textDecoration: "none", marginLeft: 10, marginRight: 10, fontSize: 20 }}>Post</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header