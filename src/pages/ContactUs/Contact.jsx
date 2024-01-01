import React from "react";
import MainNavigation from "../../Header/MainNav";
import HelpPage from "../../Component/HelpPage";
import TitleSection from "../../Component/TitleSection";
import Connections from "../../Header/relatedPages/Connections";
import { EnvironmentOutlined, PhoneFilled, YahooOutlined } from "@ant-design/icons";
import Footer from "../../Footer/Index";

const ContactUs = () => {
  return (
    <>
      <MainNavigation />
      <HelpPage title={"تماس با ما"} subject={"تماس با ما"} />
      <TitleSection
        title={"با ما در ارتباط باشید"}
        explanation={
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        }
      />
      <div className="d-flex gap-5 my-5 justify-content-center">
        <Connections
          icon={
            <PhoneFilled
              className="green-custom phone pointer "
              style={{ fontSize: "1.8em" }}
            />
          }
          title={"شماره تماس"}
          body={"98765834(021)"}
          display={"d-none d-md-flex"}
        />
        <Connections
          icon={
            <YahooOutlined
              className="green-custom pointer"
              style={{ fontSize: "2em" }}
            />
          }
          title={"ارتباط با ما"}
          body={"valiasr@yahoo.com"}
          display={"d-none d-md-flex"}
        />
        <Connections
          icon={
            <EnvironmentOutlined
              className=" green-custom pointer"
              style={{ fontSize: "2em" }}
            />
          }
          title={"آدرس ما"}
          body={"گیلان,لاهیجان"}
        />
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
