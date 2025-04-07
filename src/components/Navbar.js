import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const NavBar = ({ toggleTheme, darkMode }) => (
    <Navbar bg={darkMode ? 'secondary' : 'dark'} variant="dark" className="mb-3">
        <Container fluid className="justify-content-between">
            <Navbar.Brand href="/">📊 Real-Time Dashboard</Navbar.Brand>
            <Button variant="outline-light" onClick={toggleTheme}>
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </Button>
        </Container>
    </Navbar>
);

export default NavBar;
