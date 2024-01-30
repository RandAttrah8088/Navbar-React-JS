import React from 'react'
import './Navbar.css'
import logo from '../../logo.png'
import logo2 from '../../logo2.png'
import search from '../../search.png'
import search2 from '../../search2.png'
import setting from '../../setting.png'
import setting2 from '../../setting 2.png'

const Navbar=({theme,setTheme}) =>{
    const mode=()=>{
        theme=='light'?setTheme('dark'):setTheme('light')
    }
  return (
    <div className='navbar'>
        <img src={theme=='light'?logo:logo2} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact US</li>
        </ul>
        <div className='search'>
            <input type="text" placeholder='Search Here' />
            <img src={ theme=='light'?search:search2} alt=""  />
        </div>
        <img src={ theme=='light'?setting:setting2} alt="" className='mode' onClick={()=>mode()} />
    </div>
  )
}

export default Navbar
