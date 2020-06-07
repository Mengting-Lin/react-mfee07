// 函式元件
import React, { Fragment } from 'react';
import { Navbar, Nav  } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

function MyNavBar(props) {

    return (
        // https://react-bootstrap.github.io/components/navbar/
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">about</Nav.Link>
                        <Nav.Link as={NavLink} to="/todoapp">TodoApp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}
export default MyNavBar;