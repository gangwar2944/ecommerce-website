import {BsFillBagPlusFill} from "react-icons/bs"
import React, { useState } from "react";
import "../Allcss/Header.css";
import {Outlet,Link} from 'react-router-dom';
function Header() {

     const [showMediaIcons,setshowMediaIcons]=useState(false);
     const [active , setActive] = useState(" ");
     const  handleClick =(e)=>{
        setActive(e.target.id)
     }


    return (
        <div>
            <header class="header">
                <Link to="" alt="logo" class="logo">
                    Gangu Shop
                </Link>
                <ul className={ showMediaIcons ? "menu show-menu": "menu"}>
                    <li ><Link to="/"  id={"1"} onClick={handleClick} key={1} className={active ==="1"? "active" :undefined} >home</Link></li>
                    <li><Link to="/shop"  id={"2"} onClick={handleClick} key={2} className={active ==="2"? "active" :undefined}>shop</Link></li>
                    <li><Link to="/Blog"  id={"3"} onClick={handleClick} key={3} className={active ==="3"? "active" :undefined}>blog</Link></li>
                    <li><Link to="/about"  id={"4"} onClick={handleClick} key={4} className={active ==="4"? "active" :undefined}>about</Link></li>
                    <li><Link to="/contact"  id={"5"} onClick={handleClick} key={5} className={active ==="5"? "active" :undefined}>contact</Link></li>
                    <li><Link to="/cart"  id={"6"} onClick={handleClick} key={6} className={active ==="6"? "active" :undefined}>
                        <BsFillBagPlusFill/></Link></li>
                </ul>
                <span className="menu-icon" onClick={()=>setshowMediaIcons(!showMediaIcons)}><i class="fa-solid fa-bars"></i></span>
                <Outlet/>
            </header>

        </div>
    )
}
export default Header;