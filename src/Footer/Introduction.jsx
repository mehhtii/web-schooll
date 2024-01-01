import { EnvironmentOutlined, PhoneFilled, YahooOutlined } from "@ant-design/icons";
import React from "react";
import Related from "./Related/Related";

const Introduction = () => {
  return (
    <div className="col  my-5">
      <h1 className="my-4">دبیرستان سینا </h1>
      <p>
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <Related Icon={<PhoneFilled style={{color:"#00B16A",fontSize:"1.5em",transform:"rotate(90deg)"}}/>}
      title={"021-۱۲۳۴۵۶۷"}
      />
      <Related Icon={<YahooOutlined style={{color:"#00B16A",fontSize:"1.5em"}}/>}
      title={"vliasr@yahoo.com"}
      />
      <Related Icon={<EnvironmentOutlined style={{color:"#00B16A",fontSize:"1.5em"}}/>}
      title={"گیلان,لاهیجان"}
      />
    </div>
  );
};

export default Introduction;
