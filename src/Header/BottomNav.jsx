import {CaretDownOutlined , AlignRightOutlined, PlusCircleOutlined, MinusCircleOutlined} from "@ant-design/icons/lib/icons";
import MenuShow from "./relatedPages/MenuShow";
import {  useNavigate } from "react-router-dom";

const BottomNav = ()=>{
    const nvigate = useNavigate();
     return(
        <div className=" container-fluid">
            <div className="row bg-secondary-subtle">
                <div className="col-6 col-md-8">
                    
                   <MenuShow/>

                    <ul className=" d-none d-md-flex list-unstyled h-100 align-items-center">
                        <li className="h-100 px-4 active__menus pointer pt-2">خانه</li>
                        <li className="h-100 px-4 pointer pt-2 pages position-relative">صفحات
                        <CaretDownOutlined className="me-2"/>
                        <div className="show-pages position-absolute ">
                            <ul className="d-flex flex-column list-unstyled p-0">
                                <li className=" py-2 my-1">درباره ما</li>
                                <li className=" py-2 my-1">اساتید</li>
                                <li className=" py-2 my-1 mb-3">سوالات متداول</li>
                            </ul>
                        </div>
                        </li>
                        <li onClick={()=>nvigate("/courses")} className={`h-100 px-4 pointer pt-2`}>دوره های آموزشی</li>
                        <li className="h-100 px-4 pointer pt-2"> رویداد ها</li>
                        <li onClick={()=>nvigate("/newsandarticles")} className="h-100 px-4 pointer pt-2">اخبار و مقالات</li>
                        <li onClick={()=>nvigate("/contact-us")} className="h-100 px-4 pointer pt-2">تماس با ما</li>
                        
                    </ul>
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-end align-items-center py-1">
                    <button className="btn bg-custom btn__hover_to_black px-5 text-white pb-2 ms-5 rounded-5">فرم ثبت نام</button>
                </div>
            </div>
        </div>
    )
}

export default BottomNav;