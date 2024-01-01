import React from "react";
import MainNavigation from "../../Header/MainNav";
import "../../style.css";
import img1 from "../../Images/PossibilitiesImg1.jpg";
import img2 from "../../Images/PosibilitiesImg2.jpg";
import img3 from "../../Images/PosibilitiesImg3.jpg";
import Footer from "../../Footer/Index";

const ArticlePage = (ArtclePge) => {
  const NewComponent = () => {
    const dataArtcle = [
      {
        text: "10 روش برای سریع تر خواندن دروس عمومی۱۷ دی ۹۷",
        img: img1,
      },
      {
        text: "چطور همیشه سرحال و شاداب باشیم؟",
        img: img2,
      },
      {
        text: "راهکارهایی برای افزایش تمرکز در ساعت مطالعه۱۷ دی ۹۷",
        img: img3,
      },
    ];
    return (
      <>
        <MainNavigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col col-9 p-2 px-4">
              <ArtclePge />
            </div>
            <div className="col col-3 p-2">
              <span className="font_size">
                مقالات <span className="color_green font_size">اخیر</span>
              </span>
              <div className="arrow_div_green w-100 rounded my-1"></div>

              {dataArtcle.map((d) => (
                <div className="article_more shadow d-flex my-3 mx-2 align-items-center p-1 rounded">
                  <div className="w-50 h-100 p-2">
                    <img className="w-100 h-100 pointer rounded" src={d.img} />
                  </div>
                  <div className="d-flex w-50 flex-wrap">
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
              <div className="arrow_div_green w-100 rounded my-1"></div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  return NewComponent;
};

export default ArticlePage;
