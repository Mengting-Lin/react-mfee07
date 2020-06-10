import React from 'react'
// import { withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'


function NotFoundPage() {
    return (
        <>
            <MyBanner title="404" lead="'404'是一個網站的错误頁面"/>
            <MyBreadcrumb />
        </>
    )
}

// 高階元件的用法
export default NotFoundPage