import React from 'react'
import { withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'


function About() {
    return (
        <>
            <MyBanner title="關於我們" lead="'關於我們'是一個網站的第二個看到的頁面"/>
            <MyBreadcrumb />
        </>
    )
}

// 高階元件的用法
export default withRouter(About)