import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { container } from "../layout.module.css";

console.log('container: ', container)

const Layout = ({children}) => (
    <div className={container}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
)

export default Layout;