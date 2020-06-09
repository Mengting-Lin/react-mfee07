import React from 'react'
import { Link } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function NotFoundPage(){
    return (
        <>
            <MyBanner title="找不到網頁" lead="找不到網頁頁面" />

        </>
    )
}

export default NotFoundPage