import React from 'react'
import { Link ,withRouter, useParams } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'


function Product2(props) {
    console.log(props)
    let { id } = useParams()

    return (
        <>
            <MyBanner title="關於產品 v5.1" lead="'關於產品'是一個網站的重點"/>
            <MyBreadcrumb/>
            
            <h2>目前的產品編號是(從網址得上得到)：{ id }</h2>
        </>
    )
}

// 高階元件的用法
export default withRouter(Product2)