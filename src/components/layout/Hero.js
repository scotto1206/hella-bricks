import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { heroText, heroContainer } from "../hero.module.css";

const Header = () => {
    return (
        <div className={heroContainer}>
            <div className={heroText}>
                <h1>LEGO Builds and News</h1>
                <h2>Coming Soon!</h2>
            </div>
            <StaticImage
            alt="Star Wars helmets"
            src="../../../assets/images/helmets_image.jpg"
            />
        </div>
    )
}
export default Header;