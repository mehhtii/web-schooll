import React from "react";
import professor1 from "../Images/professorImg1.jpg";
import professor2 from "../Images/professorImg2.jpg";
import professor3 from "../Images/professorImg3.jpg";
import professor4 from "../Images/professorImg4.jpg";


const Professors = () => {

    const professorData = [
        {
            img:professor1,
            title:"استاد عسگری",
            introduction:"ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،",
        },
        {
            img:professor2,
            title:"استاد امیری",
            introduction:"ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،",
        },
        {
            img:professor3,
            title:"استاد قربانی",
            introduction:"ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،",
        },
        {
            img:professor4,
            title:"استاد علیپور",
            introduction:"ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،",
        },
    ]


  return (
    <div className="container-fluid py-4">
      <div className="row row-cols-1 row-cols-md-3 gap-5 px-4  justify-content-center position-relative">
        {professorData.map(p=>(
            <div className="col card_professors p-0 m-0">
            <img className="professor_img" src={p.img} alt="professors" />
          <div className="content">
            <h3>{p.title}</h3>
            <p>
              {p.introduction}
            </p>
            <a href="#">read more</a>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Professors;
