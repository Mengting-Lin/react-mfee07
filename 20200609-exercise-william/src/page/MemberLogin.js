import React from 'react'
import { withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'


function MemberLogin(props) {
    console.log(props);
    const {
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
    } = props.allProps
    
    // 錯誤訊息陣列的呈現
    const displayErrors = loginErrors.length ? (
        <div className="alert alert-danger" role="alert">
            <ul className="list-unstyled">
                {loginErrors.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
        </div>
    ) : (
        <div className="alert alert-success" role="alert">
            <ul className="list-unstyled">
                {loginErrors.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
        </div>
    )

      // login成功時的callback
    const loginSuccessCallback = () => {
        alert('儲存成功，跳回首頁')
        props.history.push('/')
        // props.history.goBack()
    }

    // login成功時的callback
    const logoutSuccessCallback = () => {
        alert('登出成功，跳回上一頁')
        props.history.goBack()
    }

    const displayButton = auth ? (
        <button
        className="btn btn-primary mb2"
        onClick={() => {
            logoutProcess(logoutSuccessCallback)
        }}
        >
        登出
        </button>
    ) : (
        <button
        className="btn btn-primary mb2"
        onClick={() => {
            loginProcess(loginSuccessCallback)
        }}
        >
        登入
        </button>
    )
    
    const displayForm = !auth ? (
        <>
            <input
                className="form-control mb2"
                type="text"
                value={name}
                placeholder="請輸入姓名"
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
            <input
                className="form-control mb2"
                type="text"
                value={username}
                placeholder="請輸入帳號"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input
                className="form-control mb2"
                type="text"
                value={password}
                placeholder="請輸入密碼"
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            </>
        ) : ('')

    return (
        <>
            <MyBanner title="Login" lead="会员登入页面"/>

            {displayErrors}

            <MyBreadcrumb />
            {/* <input 
            variant="outline-secondary"
                type="text" 
                value={name} 
                onChange={(event)=>{
                    setName(event.target.value);
                }} 
                placeholder="請輸入姓名"
            ></input>
            <input 
                type="text" 
                value={username} 
                onChange={(event)=>{
                    setUsername(event.target.value);
                }} 
                placeholder="請輸入帳號"
            ></input>
            <input 
                type="text" 
                value={password} 
                onChange={(event)=>{
                    setPassword(event.target.value);
                }} 
                placeholder="請輸入密碼"
            ></input>
            <button
                className="btn btn-primary mb2"
                onClick={() => {
                    loginProcess(()=>{
                        alert('儲存成功，跳回首頁')
                        // props.history.push('/')
                        loginSuccessCallback()
                    })
                }}
            >
            登入
            </button> */}
            <div className="form-inline">
                {displayForm}
                {displayButton}
            </div>
        </>
    )
}

// 高階元件的用法
export default withRouter(MemberLogin)