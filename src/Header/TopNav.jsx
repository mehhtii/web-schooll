import React from "react";
import { InstagramOutlined,PhoneOutlined,YahooOutlined, TwitterOutlined, LinkedinOutlined, WhatsAppOutlined,FieldTimeOutlined, ShoppingCartOutlined} from "@ant-design/icons/lib/icons";
import './Nav.css';
import './Custom.css';


const TopNaigation = ()=>{
    return(
        <div className='top-nav container-fluid bg-black text-gray'>
        <div className='row h-100'>
        <div className='col col-4 col-md-2 d-none d-sm-flex align-items-center gap-1 justify-content-center'>
            <PhoneOutlined className="green-custom phone"/>
            021-42698743
        </div>
        <div className='col col-4 d-none d-md-flex justify-content-evenly align-items-center gap-2'>
            <div className="d-flex gap-1">
                <YahooOutlined style={{fontSize:"1.4em"}}/>
                <span>hamyar@yahoo.com</span>
            </div>
            <div className="d-flex gap-1">
            <FieldTimeOutlined style={{fontSize:"1.4em"}}/>
            <span className="f-size-normal">ساعت کاری:9الی17</span>
            </div>
        </div>
        <div className='col col-6 col-sm-4 col-md-3'>
            <div className="row h-100 align-items-center">
                <div className="col  d-flex justify-content-center gap-2">
                    <span>سبد خرید</span>
                    <ShoppingCartOutlined style={{color:"#00B16A",fontSize:"1.8em",cursor:"pointer"}}/>
                </div>
                <div className="col">
                    <span className="login d-flex gap-1">
                        <span>ورود</span>
                        /
                        <span>ثبت نام</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='col col-4 col-md-3 d-flex justify-content-center align-items-center gap-3'>
          <InstagramOutlined className="instagram"/>
          <TwitterOutlined className="twiter"/>
          <LinkedinOutlined className="linkedin"/>
          <WhatsAppOutlined className="whatsapp"/>
        </div>
      </div>
    </div>
    )
}

export default TopNaigation;