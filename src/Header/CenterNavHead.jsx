import { EnvironmentOutlined, PhoneFilled, YahooOutlined } from "@ant-design/icons";
import Connections from "./relatedPages/Connections";

const CenterNavHeader = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col col-4 p-3">
                    <h3 className="me-lg-5">دبیرستان ولیعصر</h3>
                </div>
                <div className="col col-8 d-flex justify-content-evenly">
                    <Connections icon={<PhoneFilled className="green-custom phone pointer " style={{fontSize:"1.8em"}}/>} title={"شماره تماس"} body={"98765834(021)"} display={"d-none d-md-flex"}/>
                    <Connections icon={<YahooOutlined className="green-custom pointer" style={{fontSize:"2em"}}/>} title={"ارتباط با ما"} body={"valiasr@yahoo.com"} display={"d-none d-md-flex"}/>
                    <Connections icon={<EnvironmentOutlined className=" green-custom pointer" style={{fontSize:"2em"}}/>} title={"آدرس ما"} body={"گیلان,لاهیجان"} />
                </div>
            </div>
        </div>
    )
}

export default CenterNavHeader;