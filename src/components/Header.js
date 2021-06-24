import React from 'react';

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Header() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="home"><img src={require('../logo.svg')} className="App-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;