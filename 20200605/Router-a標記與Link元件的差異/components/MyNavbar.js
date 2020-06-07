import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function MyNavbar(props) {
    return (
    <>
        <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {/* 將react bootstrap的Nav.Link當作NavLink使用 */}
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/todoapp">TodoApp</Nav.Link>          
          <Nav.Link as={NavLink} to="/product">Product</Nav.Link>          
          {/* <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/todoapp">TodoApp</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
    )
}

export default MyNavbar