import React from 'react';
import MainNavigation from '../Header/MainNav';
import HelpPage from '../Component/HelpPage';
import ThePeriod from '../Component/ThePeriod';
import Footer from '../Footer/Index';

const Education = () => {
    return ( 
        <>
        <MainNavigation/>
        <HelpPage title={"دوره ها"} subject={"دوره ها"}/>
        <ThePeriod without={null} registerBtn={"ثبت نام در دوره"} dataExam={true}/>
        <Footer/>
        </>
     );
}
 
export default Education;