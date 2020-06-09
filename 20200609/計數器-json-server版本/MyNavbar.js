import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink, withRouter } from 'react-router-dom'

function MyNavbar(props) {
    const {auth, name} = {props}
    const loginButton =(
      <Button 
        variant="outline-light" 
        onClick={() => {props.history.push('/memberlogin')}}
      >
        登入
      </Button>
    )
    const logoutButton =(
      <>
        <span style={{color:'#ffffff'}}>{name}, 你好</span>
        <Button 
          variant="outline-light" 
          onClick={()=>{props.history.push('/memberlogin')}}>
          登出
        </Button>
      </>
    )

    const displayButton = auth ? logoutButton : loginButton

    return ( 
      <>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            {/* 將Nav.Link當作NavLink使用 */}
            {/* 記得首頁`/`要加exact作精確比對，不然都會一直點亮 */}
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/todoapp">TodoApp</Nav.Link>          
            <Nav.Link as={NavLink} to="/product">Product</Nav.Link>          
            <Nav.Link as={NavLink} to="/productlist">產品列表</Nav.Link>          
            <Nav.Link as={NavLink} to="/memberlogin">Login</Nav.Link>          
            <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link>          
            <Nav.Link as={NavLink} to="/counterjson">Counterjson</Nav.Link>          
            <Nav.Link as={NavLink} to="/cart">購物車</Nav.Link>          
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/todoapp">TodoApp</Nav.Link> */}
          </Nav>
          <Form inline>{displayButton}</Form>
        </Navbar>
      </>
    )
}

export default withRouter(MyNavbar)