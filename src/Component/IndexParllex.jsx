import React from "react";
import ConditionParallex from "./ConditionParallex";


const Parallax = ()=>{
    return(
        <div className="container-fluid index_parallax h-auto my-5">
            <div className="row row-cols-1 row-cols-md-2 py-4">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="form_parent rounded">
                        <div className="form_title rounded-top">
                            <h6 className="text-center pt-3 text-light">همین حالا ثبت نام کنید</h6>
                            <span className="d-block mt-3 text-center text-light">از این فرصت فوق العاده استفاده کن...</span>
                        </div>
                        <span className="d-block text-secondary-emphasis mx-3 mt-4 mb-1">فرصت عالی برای تدریس در یکی بهترین  مدرسه های لاهیجان فقط کافیه فرم زیر   رو تکمیل کنید, ما با شما تماس میگیریم</span>
                        <form className="w-100 mt-3 form_for_teacher h-50 d-flex flex-column gap-3">
                            <div className="row mt-3 justify-content-center">
                               <input className="ms-3 p-2 form-control" type="text" placeholder="نام"/>
                               <input className=" p-2 form-control" type="text" placeholder="نام خانوادگی" />
                            </div>
                            <div className="row justify-content-center">
                               <input className="ms-3 p-2 form-control" type="email" placeholder="پست الکترونیک" />
                               <input className=" p-2 form-control" type="number" placeholder="موبایل" />
                            </div>
                            <textarea placeholder="پیام خود را اینجا بنویسید " className="w-75 form-control mx-auto" cols="20" rows="10"></textarea>
                            <button className="btn w-50 rounded-5 mx-auto p-2 btn_coustom" type="submit">ارسال</button>
                        </form>
                    </div>
                </div>

                <div className="col">
                    <div className="text-center">
                        <h1 className="text-light  rounded mt-5 ms-5">بیش از 14,200 نفر فارغ التحصیل نخبه طی 12 سال فعالیت حرفه ای</h1>
                    </div>
                    <div className="text-center my-5 ms-5">
                        <p className="text-light  rounded">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum veritatis minima ipsam facilis modi a veniam blanditiis praesentium dolores possimus iure tempora amet velit, asperiores, quod quo? Nulla, sunt ut.</p>
                    </div>
                    <div className="row pt-2">
                        <ConditionParallex center={"90%+"} bottom={"قبولی"}/>
                        <ConditionParallex center={"10K+"} bottom={"دانشجو"}/>
                        <ConditionParallex center={"33+"} bottom={"استاد"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax;