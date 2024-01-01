import React from 'react';
import '../css/Help.css';
import {  useNavigate } from 'react-router-dom';


const HelpPage = ({title, subject}) => {
    const nvigate = useNavigate();
    return ( 
        <>
        <div className='container-fluid help_page_img mb-5'>
            <div className='row text-light flex-column align-items-center  h-100 justify-content-center'>
                <div className='col text-center d-flex justify-content-center align-items-end'>
                    <h4 className='mb-3'>{title}</h4>
                </div>
                <div className='col d-flex justify-content-center '>
                    <span className='ms-2 txt_help_hover' onClick={()=>nvigate("/")}>خانه</span>
                    |
                    <span className='me-2 txt_help_hover'>{subject}</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default HelpPage;