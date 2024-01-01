import React from "react";


const TitleSection  = ({title,explanation})=>{
    return(
        <div className="d-flex flex-column align-items-center my-5">
            <h1 className="mb-4">{title}</h1>
            <div className="arrow_line mt-3"></div>
            <span className="mt-5 text-secondary">{explanation}</span>
        </div>
    )
}

export default TitleSection;