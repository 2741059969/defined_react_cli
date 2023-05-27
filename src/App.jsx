import React, { lazy,Suspense } from 'react'
// import Home from './pages/home'
// import About from './pages/about'
import { Button } from 'antd'
import "antd/dist/antd.css"
import {Link,Routes,Route} from 'react-router-dom'
//使用路由懒加载
const Home=lazy(()=>import('./pages/home'))
const About=lazy(()=>import('./pages/about'))
function App(){
  return <div>
    <p>App</p>
    <Button type='primary'>确定</Button>
    <ul>
      <li><Link to="/home">去首页</Link></li>
      <li><Link to="/about">去关于</Link></li>
    </ul>
    <Suspense >
      <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </Suspense>
  </div>
}
export default App