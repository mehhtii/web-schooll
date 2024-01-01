import React from "react";
import ArticlePage from "./HocArticles";
import img1 from "../../Images/PosibilitiesImg2.jpg";
import ContentArticle from "./ContentArtcle";

const Article1 = () => {
  return (
    <>
      <div className="px-3 py-2">
        <ContentArticle title={"چطور همیشه سرحال و شاداب باشیم؟"} img={img1}/>
      </div>
    </>
  );
};

export default ArticlePage(Article1);
