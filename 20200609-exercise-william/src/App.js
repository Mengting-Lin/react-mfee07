import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom"
import React, { useState } from 'react';

import MyNavBar from './components/MyNavBar';
import MainContent from './components/MainContent';

// page router 組件
import Home from './page/Home'
import About from './page/About'
import TodoApp from './page/TodoApp'
import Product from './page/Product'
import Product2 from './page/Product2'
import Conuter from './page/Conuter'
import ProductList from './page/ProductList'
import Cart from './page/Cart'
import My from './page/My'
import CounterJSONServer from './page/CounterJSONServer'

// 会员登入
import MemberLogin from './page/MemberLogin'

// 404
import NotFoundPage404 from './page/NotFoundPage404'

// 保护路由
import ProtectedRoute from './utils/ProtectdRoute'

function App(props){
    // console.log('App', props);
    // const [todos, setTodos] = useState([
    //     { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    //     { id: 1591256594281, text: '買iphone', completed: false, edited: false },
    //     { id: 1591256594283, text: '學react', completed: false, edited: false },
    // ])
    const [todos, setTodos] = useState([])

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginErrors, setLoginErrors] = useState([])

    const [auth, setAuth] = useState(false)

    const loginProcess = (loginSuccessCallback) => {
        const errors = []
    
        // let a = (name === '')?'姓名沒填':'姓名ok';
        // errors.push(a)
        if (name === '') errors.push('姓名沒填');
        if (username === '') errors.push('帳號沒填')
        if (password === '') errors.push('密碼沒填')
    
        if (errors.length > 0) {
            setLoginErrors(errors)
            return
        }
    
        // 清空錯誤訊息陣列 + 登入
        setLoginErrors([])
        setAuth(true)

        // 執行成功的callback(來自MemberLogin)
        loginSuccessCallback()
    }

    const logoutProcess = (logoutSuccessCallback) => {
        setName('')
        setUsername('')
        setPassword('')
    
        // 認証改為false
        setAuth(false)
    
        // 執行成功的callback(來自MemberLogin)
        logoutSuccessCallback()
    }


    return(
        <Router>
            <>
                <MyNavBar allProps = {{
                    auth, 
                    name,
                    logoutProcess
                }}/>
                <MainContent title = "william 測試跳轉">

                    {/* 連結 */}
                    {/* <Link to="/">_首頁_</Link>
                    <Link to="/about">_關於我們_</Link>
                    <Link to="/todoapp">_代辦事項_</Link> */}

                    {/* 切換地址 */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/memberlogin">
                            <MemberLogin 
                                allProps = {{
                                    name,
                                    setName,
                                    username,
                                    setUsername,
                                    password,
                                    setPassword,
                                    logoutProcess,
                                    loginProcess,
                                    loginErrors,
                                    auth,
                                }}
                                // name={name}
                                // setName={setName}
                                // username={username}
                                // setUsername={setUsername}
                                // password={password}
                                // setPassword={setPassword}
                                // loginProcess={loginProcess}
                                // logoutProcess={logoutProcess}
                                // loginErrors={loginErrors}
                                // auth={auth}
                            />
                        </Route>

                        {/* 多階層分類網址测试 */}
                        {/** 定義 product 路徑中的params的物件屬性名稱，問號是可有可無的意思 */}
                        <Route path="/product/:type?/:id?/">
                            <Product />
                        </Route>

                        <Route path="/product2/:id?">
                            <Product2 />
                        </Route>
                        
                         {/* Conuter 计时器 */}
                        <Route path="/Conuter">
                            <Conuter />
                        </Route>
                        
                        {/* ProductList */}
                        <Route path="/ProductList">
                            <ProductList />
                        </Route>
                        
                        {/* Cart */}
                        <Route path="/Cart">
                            <Cart />
                        </Route>
                        
                        {/* 练习 */}
                        <Route path="/My">
                            <My/>
                        </Route>
                        
                        {/* 练习 */}
                        <Route path="/CounterJSONServer">
                            <CounterJSONServer/>
                        </Route>
                        
                        <Route path="/todoapp">
                            <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                        </Route>

                        {/* ProtectdRoute */}
                        {/* <ProtectedRoute path="/todoapp">
                            <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                        </ProtectedRoute> */}

                        {/* 404 必须放在最后一个 */}
                        {/* Redirect 重新導向 / 需要先引入 */}
                        <Route path="/404">
                            <NotFoundPage404/>
                        </Route>
                        <Redirect to="/404" />
                    </Switch>

                </MainContent>
            </>
        </Router>
    )
}

export default App