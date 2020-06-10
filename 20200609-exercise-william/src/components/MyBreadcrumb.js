import React from 'react'
import { Link, withRouter ,useRouteMatch} from 'react-router-dom'

function MyBreadcrumb(props) {
    const pathlist = ['/', 'about', 'product', 'product2','todoapp', '404', 'memberlogin', 'Conuter']
    const pathnames = ['首頁', '關於', '產品1', '產品2','待辨','404', 'Login', '计数器']

    // const { match, location, history } = props;

    // console.log(props)
    // console.log(match, location, history)

    let { path, url } = useRouteMatch();

    // 先找出對應的中文詞
    let locationPathname = props.location.pathname.split('/')[1]
    // console.log('locationPathname:'+ locationPathname)
    // `/product/xxxx` 轉為 `/product`
    if (locationPathname.includes('/product2')) locationPathname = '/product2'

    const index = pathlist.findIndex((value) => { return value === locationPathname})

    return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">首頁</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    <Link to={pathlist[index]}>{pathnames[index]}</Link>
                    {/* { locationPathname } */}
                    <br/>
                    测试:
                    <br/>
                    url:{url}
                    <br/>
                    path:{path}
                    <br/>
                </li>
            </ol>
        </nav>
    </>
    )
}

export default withRouter(MyBreadcrumb)