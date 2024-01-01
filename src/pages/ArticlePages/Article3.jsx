import React from "react";
import ContentArticle from "./ContentArtcle";
import img3 from '../../Images/PossibilitiesImg1.jpg';
import ArticlePage from "./HocArticles";

const Article3 = () => {
    return ( 
        <div className=" px-3 py-2">
            <ContentArticle title={"10 روش برای سریع تر خواندن دروس عمومی"} img={img3} />
        </div>
     );
}
 
export default ArticlePage(Article3);