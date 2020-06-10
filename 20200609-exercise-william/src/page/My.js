import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'


function My() {
    useEffect(()=>{
        fetch(' http://localhost:5555/items',{
            method: 'get'
        })
        .then((response)=>{
            return response.json();
            // console.log(res)
        })
        .then((res)=>{
            console.log(res)
            document.getElementById('app').append(res[0]['title'])
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    return (
        <>
            <MyBanner title="關於我們" lead="'關於我們'是一個網站的第二個看到的頁面"/>
            麻烦请看F12，谢谢~ 
            <div id="app"></div>
        </>
    )
}

// 高階元件的用法
export default withRouter(My)