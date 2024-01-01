import React from "react";
import "../../style.css";
import img1 from "../../Images/PossibilitiesImg1.jpg";
import img2 from "../../Images/PosibilitiesImg2.jpg";
import img3 from "../../Images/PosibilitiesImg3.jpg";
import ArtElement from "./ArtElement";

const Articles = () => {
  
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row  justify-content-center gap-4 mx-4 mx-md-0 my-2">
          <ArtElement title={"10 روش برای سریع تر خواندن دروس عمومی"} img={img1} navigates={"/newsandarticles/article3"}/>

          <ArtElement title={"چطور همیشه سرحال و شاداب باشیم?"} img={img2} navigates={"/newsandarticles/article1"}/>
          
          <ArtElement title={"راهکار هایی برای افزایش تمرکز در ساعات مطالعه"} img={img3} navigates={"/newsandarticles/article2"}/>
        </div>
      </div>
    </>
  );
};

export default Articles;
