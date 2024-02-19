import "./Header.css"
import React from "react"
import { MdOutlineShoppingCart } from "react-icons/md";

function Header(){


    return(
        <div className="header-ctrl">
            <div className="header-title">
               <MdOutlineShoppingCart className="header-title-logo"></MdOutlineShoppingCart>
               <p className="header-title-name"><span className="header-title-name-span">Paya</span> Shop</p>
            </div>
            <div className="header-items">
                <button className="hedaer-items-btn">Products</button>
                <button className="hedaer-items-btn">Services</button>
                <button className="hedaer-items-btn">Branches</button>
                <button className="hedaer-items-btn">About Us</button>
            </div>

        </div>
    )
}

export default Header