import React, { useState } from "react";
import {AlignRightOutlined,MinusCircleOutlined,PlusCircleOutlined }  from "@ant-design/icons/lib/icons"
import { useNavigate } from "react-router-dom";



const MenuShow = ()=>{
    const [menuShow, setMenuShow] = useState(true);
    const [showPage ,setshowPage] = useState(false);
    const navigate = useNavigate()

    const showMenuSlider  = ()=>{
        setMenuShow(!menuShow);
    }

    return(
        <>
        <AlignRightOutlined onClick={showMenuSlider}  className=" d-md-none pointer" style={{fontSize:"2em", marginTop:"6px"}}/>
                  
                  <div className={` bg-light shadow-lg position-absolute responsive_menu_slider ${menuShow ? "hide__slider" : "show__slider"}`}>
                   <span id="closed_menu_side" className="closed_menu_side" onClick={showMenuSlider}>×</span>
                   <ul className={`list-unstyled w-100 d-flex flex-column gap-4 ${menuShow ? "d-none ":"d-block trnstion"}`}>
                       <li className="pointer p-1">خانه</li>
                       <li onClick={()=>setshowPage(!showPage)} className="pointer d-flex align-items-center gap-2"> 
                           {showPage ? <MinusCircleOutlined /> :<PlusCircleOutlined />}
                           صفحات
                       </li>
                       <div className={`w-100 ${showPage ? "d-block " : "d-none"}`}>
                               <ul className="list-unstyled d-flex flex-column gap-2">
                                   <li className="pointer">درباره ما</li>
                                   <li className="pointer">اساتید</li>
                                   <li className="pointer">سوالات متداول</li>
                               </ul>
                           </div>
                       <li onClick={()=>navigate("/courses")} className="pointer p-1">دوره های آموزشی</li>
                       <li onClick={()=>navigate("/courses")} className="pointer p-1">رویداد ها</li>
                       <li onClick={()=>navigate("/newsandarticles")} className="pointer p-1">اخبار و مقالات</li>
                       <li onClick={()=>navigate("/contact-us")} className="pointer p-1">تماس با ما</li>
                   </ul>
                  </div>

        </>
    )
}

export default MenuShow;