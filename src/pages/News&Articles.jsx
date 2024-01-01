import React from "react";
import MainNavigation from "../Header/MainNav";
import HelpPage from "../Component/HelpPage";
import Articles from "./ArticlePages/Articles";
import Footer from "../Footer/Index";

const NewsAndArticles = () => {
    return ( 
        <>
        <MainNavigation/>
        <HelpPage subject={"اخبار و مقالات"}/>
        <Articles/>
        <Footer/>
        </>
     );
}
 
export default NewsAndArticles;