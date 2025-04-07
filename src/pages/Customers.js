import React, { useState, useEffect } from 'react';
import { Table, Card, Form, Spinner, Pagination } from 'react-bootstrap';

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const fetchCustomers = async () => {
        try {
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();
            setCustomers(data.users);
            setLoading(false);
        } catch (err) {
            console.error('API Error:', err);
        }
    };

    useEffect(() => {
        fetchCustomers();
        const interval = setInterval(fetchCustomers, 10000); // refresh every 10s
        return () => clearInterval(interval);
    }, []);

    const filtered = customers.filter((c) =>
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const paginatedData = filtered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h3 className="mb-4">Customer List</h3>
            <Form.Control
                type="text"
                placeholder="Search by name..."
                className="mb-3"
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
            />

            <Card className="shadow-sm">
                <Card.Body>
                    {loading ? (
                        <div className="text-center py-4">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedData.map((c) => (
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.firstName} {c.lastName}</td>
                                            <td>{c.age}</td>
                                            <td>{c.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <Pagination>
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        </>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Customers;
