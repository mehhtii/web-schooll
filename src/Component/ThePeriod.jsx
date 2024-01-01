import React from "react";
import TitleSection from "./TitleSection";
import Img1 from "../Images/SlideImg-1.jpg";
import Img2 from "../Images/SlideImg2.jpg";
import Img3 from "../Images/SlideImg3.jpg";
import '../css/Help.css';

const ThePeriod = ({without,registerBtn,dataExam}) => {
  const Data = [
    {
      img: Img1,
      Des: "دوره تند خوانی و افزایش تمرکز",
      price:"398000"
    },
    {
      img: Img2,
      Des: "آموزش برنامه نویسی از صفر تا صد",
      price:"450000"
    },
    {
      img: Img3,
      Des: "دوره ریاضی کاربردی",
      price:"340000"
    },
  ];

  return (
    <>
      {without == null ? null : (
        <TitleSection
          title={"پر مخاطب ترین دوره های آموزشی"}
          explanation={
            "برای مشاهده ی جزئیات هر دوره آموزشی، اساتید و و محتوای ارائه شده کافیستروی نام دوره کلیک کنید تا اطلاعات بیشتری کسب کنید و در صورت علاقه مندی ثبت نام کنید"
          }
        />
      )}
      <div className="container-fluid mt-3 mb-5">
        <div className="row row-cols-1 row-cols-md-4 justify-content-center align-items-center gap-4 px-5">
          {Data.map((d) => (
            <div
              key={Math.random()}
              className="col pt-2 card parent_the_period"
            >
              <div className="overflow-hidden the_period_img_parent rounded">
                <img
                  className="the_period_img rounded"
                  src={d.img}
                  alt="thePeriod"
                />
              </div>
              {
                without == null ? (
                    <span className="mt-3 me-3 text-success">{d.price}تومان</span>
                ) : null
              }
              <p className={`${without == null ? "mt-1" :"mt-4" }`}>{d.Des}</p>
              {
                registerBtn ? (
                    <button className="btn btn-sm btn_color mt-1 mb-3 rounded-5 w-75 mx-auto p-2">{registerBtn}</button>
                ): null
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThePeriod;
