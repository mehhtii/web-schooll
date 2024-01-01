import React from "react";
import MainNavigation from "../Header/MainNav";
import Slider from "../Component/Slider";
import TitleSection from "../Component/TitleSection";
import Possibilities from "../Component/Possibilities";
import Professors from "../Component/Professors";
import Information from "../Component/InformationParallex";
import ThePeriod from "../Component/ThePeriod";
import Footer from "../Footer/Index";
import Parallax from "../Component/IndexParllex";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <Slider />
      <TitleSection
        title={"ارایه بهترین راهکار های آموزشی"}
        explanation={
          "دبیرستان سینا اولین دبیرستان تمام هوشمند شهر تهران با کادری مجرب و حرفه ای برگزاری سالیانه نزدیک به 40 دوره مهارتی برای دانش آموزان "
        }
      />
      <Possibilities />
      <Parallax/>
      <TitleSection
        title={"برترین اساتید در رشته های مختلف"}
        explanation={
          "کادری فوق العاده خبره و مجرب با رزومه های عالی وفارغ التحصیل برترین دانشگاه های ایران و جهان"
        }
      />
      <Professors />
      <Information />
      <ThePeriod />
      <Footer />
    </>
  );
};

export default Home;
