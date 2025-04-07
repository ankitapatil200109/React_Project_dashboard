import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div style={{ width: '220px', background: '#e9ecef', minHeight: '100vh' }} className="p-3">
        <h5 className="text-dark mb-4">Menu</h5>
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/">🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/customers">👥 Customers</Nav.Link>
        </Nav>
    </div>
);

export default Sidebar;
