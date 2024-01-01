import React from "react";
import ContentArticle from "./ContentArtcle";
import img2 from '../../Images/PosibilitiesImg3.jpg';
import ArticlePage from "./HocArticles";

const Article2 = () => {
    return ( 
        <div className="px-3 py-2">
            <ContentArticle title={"راهکارهایی برای افزایش تمرکز در ساعت مطالعه"} img={img2}/>
        </div>
     );
}
 
export default ArticlePage(Article2);