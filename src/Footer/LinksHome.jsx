import React from "react";
import Representative from "./Related/DepartmentRepresentative";
import { useNavigate } from "react-router-dom";


const LinksHome = ()=>{
    const nvigate = useNavigate()
    return(
        <div className="col">
            <Representative title={"لینک های کاربردی"}/>
            <ul className="list-unstyled">
                <li onClick={()=>nvigate("/")} className="mt-3 footer_links">خانه</li>
                <li onClick={()=>nvigate("/courses")} className="mt-3 footer_links">دوره های آموزشی</li>
                <li onClick={()=>nvigate("/newsandarticles")} className="mt-3 footer_links">رویداد</li>
                <li onClick={()=>nvigate("/contact-us")} className="mt-3 footer_links">ارتباط با ما</li>
            </ul>
        </div>
    )
}

export default LinksHome;

