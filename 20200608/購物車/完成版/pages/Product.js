import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Procuct(props){
    console.log(props);

    // 查詢字串可由props.location.search得到
    // 使用URLSearchParams來準備解析得到的查詢字串
    // URLSearchParams注意ie相容性問題
    const paramsString = props.location.search;
    const searchParams = new URLSearchParams(paramsString);
    
    return (
        <>
            <MyBanner title="產品" lead="產品" />
            <MyBreadcrumb />
            {/* 用get方法即可解析出查詢字 */}
            <h2>目前的產品編號是(從網址得上得到)：{searchParams.get('cat')}</h2>
            <h2>目前的產品類型是(從網址得上得到)：{searchParams.get('pid')}</h2>
        </>
    )
}

export default withRouter(Procuct)