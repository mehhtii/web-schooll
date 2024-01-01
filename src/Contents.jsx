import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import NewsAndArticles from "./pages/News&Articles";
import Article1 from "./pages/ArticlePages/Article1";
import Article2 from "./pages/ArticlePages/Article2";
import Article3 from "./pages/ArticlePages/Article3";
import ContactUs from "./pages/ContactUs/Contact";

const Contents = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Education />} />
        <Route path="/newsandarticles" element={<NewsAndArticles/>}/>
        <Route path="/newsandarticles/article1" element={<Article1/>}/>
        <Route path="/newsandarticles/article2" element={<Article2/>} />
        <Route path="/newsandarticles/article3" element={<Article3/>} />
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </>
  );
};

export default Contents;
