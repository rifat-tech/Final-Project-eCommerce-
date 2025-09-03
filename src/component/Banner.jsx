import React from "react";
import Slider from "react-slick";
import two from "../assets/2.png"

import banner_img from "../assets/Banner-Full.png"
import Container from "./Container";
import { FaTruckMoving, FaUndoAlt } from "react-icons/fa";
const Banner = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
         
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "88%",
          left: "0%",
          transform: "translateY(-50%)",
         
          
          

        }}
      >
        <ul style={{ margin: "0px", } }> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight: "3px white solid",
          padding:"1px 0",
          color:"transparent",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          
          
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
 
  
   <section className={"bg-[hsl(0,27%,98%)] border-1 border-[#FFFFFF] "}>
    <Slider {...settings} className="Banner_Slider" >
        <div>
           <img src={banner_img} alt="" /> 
        </div>
        <div>
           <img src={banner_img} alt="" /> 
        </div>
        <div>
           <img src={banner_img} alt="" /> 
        </div>
        <div>
           <img src={banner_img} alt="" /> 
        </div>
    </Slider>
    <Container >
        <div className="w-full flex py-4 justify-between items-center ">
            <div className="w-2/5 flex items-center gap-2">
            <img src={two} alt="" />
            <p className="font-Header text-[#6D6D6D] text-[16px]">Two years warranty</p>
            </div>
            <div className="w-2/5 flex items-center gap-2">
            <FaTruckMoving />
            <p className="font-Header text-[#6D6D6D] text-[16px]">Free shipping</p>

            </div>
           <div className="w-1/5 flex items-center gap-2">
            <FaUndoAlt />
            <p className="font-Header text-[#6D6D6D] text-[16px]">Free shipping</p>

            </div>
           
            </div>
            </Container>
   </section>
   
  )
}

export default Banner