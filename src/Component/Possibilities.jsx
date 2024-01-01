import React, { useRef, useState } from "react";
import possibilities1 from "../Images/PossibilitiesImg1.jpg";
import possibilities2 from "../Images/PosibilitiesImg2.jpg";
import possibilities3 from "../Images/PosibilitiesImg3.jpg";
import {useScroll, motion, useInView } from "framer-motion";

const Possibilities = () => {
  const [boxes, setBoxes] = useState([
    {
      img: possibilities1,
      header: "دوره های آموزشی آنلاین",
      body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      img: possibilities2,
      header: "برترین اساتید کنکور",
      body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      header: "امکانات کارگاهی برای هر دانش آموز",
      img: possibilities3,
      body: "لورم ایپسوم متن ساختگی با تولید .",
    }
 ]);


  function Div ({ children }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
  
    

    return (
      <section className="container-fluid"  ref={ref}>
        <div className="row  row-cols-md-4 p-5 p-md-0 row-cols-1  gap-5 px-3 justify-content-center"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"  
        }}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <div className="container-fluid">
      <Div>
        {/* <div className="w-100 gap-4 "> */}

        
        {boxes.map(b=>(
             <div
             className="shadow possibilities_boxes p-0"
             >
             <div className="header_box">
                 <img className="img_box_possibilities" src={b.img}/>
             </div>
             <div className="body_box">
                 <h5 className="mt-1 mx-2">{b.header}</h5>
                 <span className="mx-2 mb-2">{b.body}</span>
             </div>
         </div>
        ))}
       {/* </div> */}
      </Div>
    </div>
  );
};

export default Possibilities;
