import React from "react";
import { Link } from "gatsby"
import { navLinks, navLinkItem } from "../header.module.css";



const Header = () => {
    return (
        <header>
            <div className={navLinks}>
                <Link className={navLinkItem} to="/">hella bricks</Link>
            </div>
        </header>
    )
}
export default Header;