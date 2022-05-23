import React, { useState } from "react";
import "../Allcss/Header.css";
import {Outlet,Link} from 'react-router-dom';
function Header() {

     const [showMediaIcons,setshowMediaIcons]=useState(false);

    return (
        <div>
            <header class="header">
                <Link to="" alt="logo" class="logo">
                    Gangu Shop
                </Link>
                <ul className={ showMediaIcons ? "menu show-menu": "menu"}>
                    <li><Link to="/" class="active">home</Link></li>
                    <li><Link to="/shop" >shop</Link></li>
                    <li><Link to="/Blog">blog</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/cart"><i class="fa-solid fa-bag-shopping"></i></Link></li>
                </ul>
                <span className="menu-icon" onClick={()=>setshowMediaIcons(!showMediaIcons)}><i class="fa-solid fa-bars"></i></span>
                <Outlet/>
            </header>

        </div>
    )
}
export default Header;