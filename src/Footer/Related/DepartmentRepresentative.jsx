import React from "react";


const Representative = ({title})=>{
    return(
        <div className="col my-5">
            <h1>{title}</h1>
            <div className="arrow_line text-center my-5 me-4"></div>
        </div>
    )
}

export default Representative;