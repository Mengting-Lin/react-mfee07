// 函式元件
import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

// https://github.com/eyesofkids/201/blob/master/data/0605/react-router%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E.md
import { Link, NavLink, withRouter } from 'react-router-dom'

function MyNavBar(props) {

    const {auth, name, logoutProcess} = props.allProps;

    const loginButton = (
        <Button
        onClick={() => {
            props.history.push('/memberlogin')
        }}
        >
        登入
        </Button>
    )
    const logoutButton = (
        <Fragment>
            <span style={{ color: '#000' }}>{name}, 你好</span>
            <Button 
                onClick={()=>{ 
                    props.history.push('/memberlogin') 
                }}
            >登出</Button>
        </Fragment>
    )

    const displayButton = auth ? logoutButton : loginButton

    return (
        // https://react-bootstrap.github.io/components/navbar/
        <Fragment>
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        {/* react bootstrap */} 
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/product">prodcut</Nav.Link>
                        <Nav.Link as={NavLink} to="/product2">prodcut v5.1 </Nav.Link>
                        <Nav.Link as={NavLink} to="/ProductList">ProductList</Nav.Link>
                        <Nav.Link as={NavLink} to="/Cart">Cart</Nav.Link>
                        <Nav.Link as={NavLink} to="/Conuter">计数器 counter</Nav.Link>
                        <Nav.Link as={NavLink} to="/todoapp">ToDoApp</Nav.Link>
                        <Nav.Link as={NavLink} to="/memberlogin">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/My">My</Nav.Link>
                        <Nav.Link as={NavLink} to="/CounterJSONServer">CounterJSONServer</Nav.Link>

                        {/* 無css 樣式 */}
                        {/* as={NavLink} 就會有 css 樣式 */}
                        {/* <Link as={NavLink} to="/" exact> 首頁 </Link>
                        <Link as={NavLink} to="/about"> 關於我們 </Link>
                        <Link as={NavLink} to="/todoapp"> 代辦事項 </Link>  */}
                        
                        {/* 導覽頁面專用 因為有css 樣式 */}
                        {/* <NavLink to="/" exact> 首頁 </NavLink>
                        <NavLink to="/about"> 關於我們 </NavLink>
                        <NavLink to="/todoapp"> 代辦事項 </NavLink> */}

                    </Nav>
                    <Form inline>
                        {/* <Button variant="outline-success">Search</Button> */}
                        { displayButton }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

// export default MyNavBar;
export default withRouter(MyNavBar);