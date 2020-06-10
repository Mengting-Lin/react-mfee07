import React from 'react'
import { withRouter } from 'react-router-dom'

import MyBanner from '../components/todo/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
    console.log(props)
    const searchParams = new URLSearchParams(props.location.search)
    return (
        <>
            <MyBanner title="關於產品" lead="'關於產品'是一個網站的重點"/>
            <MyBreadcrumb/>
            <hr/>
            <h4>这是react写法/props.match.params</h4>
                                     path="/product/:type?/:id?/"
            <h4>请使用 http://localhost:3000/product/威廉/1</h4>
            <h2>目前的產品id是(從網址得上得到)：{props.match.params.id}</h2>
            <h2>目前的產品類型type是(從網址得上得到)：{props.match.params.type}</h2>
            <hr/>
            <h4>这是js写法/searchParams.get('type or id')</h4>
                                     path="/product/:type?/:id?/"
            <h4>请使用 http://localhost:3000/product/?type=威廉&id=1</h4>
            <h2>目前的產品類型是(從網址得上得到)：{searchParams.get('type')}</h2>
            <h2>目前的產品編號是(從網址得上得到)：{searchParams.get('id')}</h2>
        </>
    )
}

// 高階元件的用法
export default withRouter(Product)
// export default Product