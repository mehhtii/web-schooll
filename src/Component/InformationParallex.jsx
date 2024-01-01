import  {BankOutlined, LaptopOutlined, TrophyOutlined, UserAddOutlined} from "@ant-design/icons";
import React from "react";



const Information = ()=>{

    const informationData = [
        {
            Icon:<BankOutlined/>,
            condition:"100+",
            Des:"برگزیده خوارزمی"
        },
        {
            Icon:<TrophyOutlined/>,
            condition:"100+",
            Des:"برگزیده خوارزمی"
        },
        {
            Icon:<LaptopOutlined/>,
            condition:"100+",
            Des:"برگزیده خوارزمی"
        },
        {
            Icon:<UserAddOutlined/>,
            condition:"100+",
            Des:"برگزیده خوارزمی"
        },
    ]

    return(
        <div className="container-fluid index_information h-auto p-5">
            <div className="row row-cols-1 row-cols-md-4 w-100 h-100 justify-content-center align-items-center">
                {informationData.map(i=>(
                    <div className="col text-center text-light">
                        <h3 className="ms-2 icon_anim" style={{fontSize:"3.5em"}}>{i.Icon}</h3>
                        <h5>{i.condition}</h5>
                        <p>{i.Des}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Information;