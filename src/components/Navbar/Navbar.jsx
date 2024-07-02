import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("HOME")

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick = {()=> setMenu("HOME")} className={menu === "HOME" ? "active": ""}>HOME</Link>

            <a href='#explore-menu' onClick = {()=>setMenu("MENU")} className={menu === "MENU" ? "active": ""}>MENU</a>

            <a href='#app-download' onClick = {()=>setMenu("MOBILE-APP")} className={menu === "MOBILE-APP"? "active": ""}>MOBILE-APP</a>
            
            <a href='#footer' onClick = {()=>setMenu("CONTACT-US")} className={menu === "CONTACT-US"? "active": ""}>CONTACT-US</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='./cart' ><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>SIGN IN</button>
        </div>
    </div>
  )
}

export default Navbar
