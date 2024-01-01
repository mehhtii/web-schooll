import React from "react";
import '../Footer/footer.css';
import Introduction from "./Introduction";
import LinksHome from "./LinksHome";
import SotialMedia from "./SotialMedia";


const Footer = ()=>{
    return(
        <div className="container-fluid h-auto footer_styled">
            <div className="row  row-cols-1 row-cols-md-3 h-100 p-5 text-light">
                <Introduction/>
                <LinksHome/>
                <SotialMedia/>
            </div>
        </div>
    )
}

export default Footer;
