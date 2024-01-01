import { CalendarOutlined, FolderOpenOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const ArtElement = ({ title, img, navigates }) => {
  const navigate = useNavigate();
  return (
    <div className="col col-12 col-md-3 article py-3 px-2 text-end shadow-lg rounded">
      <h5 className="px-4">{title}</h5>
      <div className="d-flex align-items-center">
        <span className="d-flex align-items-center me-2">
          <small>5دی 1402</small>
          <small>
            <CalendarOutlined className="me-1 mb-1" />
          </small>
        </span>
        <span className="d-flex align-items-center me-3">
          <small>دیجیتال</small>
          <small>
            <FolderOpenOutlined className="me-1 mb-1" />
          </small>
        </span>
      </div>
      <div className="w-100 px-2 py-3 ">
        <img className="w-100" src={img} />
      </div>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا ب
      </p>
      <button className="btn_more" onClick={() => navigate(navigates)}>
        ادامه مطلب
      </button>
    </div>
  );
};

export default ArtElement;
