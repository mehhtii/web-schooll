import React from "react";

//  Related to the introduction section of the footer

const Related = ({Icon, title})=>{
    return(
        <div className="d-flex justify-content-start align-items-center gap-2 my-3">
            {Icon}
            <span>{title}</span>
        </div>
    )
}

export default Related;