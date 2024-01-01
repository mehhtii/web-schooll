import React from "react";
import Representative from "./Related/DepartmentRepresentative";

const SotialMedia = ()=>{
    return(
        <div className="col">
            <Representative title={"شبکه های اجتماعی"}/>
            <ul className="list-unstyled"> 
               <li className="mt-3 footer_links">کانال تلگرام</li>
               <li className="mt-3 footer_links">صفحه اینستاگرام</li>
               <li className="mt-3 footer_links">توییتر</li>
               <li className="mt-3 footer_links">فیسبوک</li>
            </ul>
        </div>
    )
}

export default SotialMedia;