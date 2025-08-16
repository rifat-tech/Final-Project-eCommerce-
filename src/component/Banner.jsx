import React from "react";
import Slider from "react-slick";

import banner_img from "../assets/Banner-Full.png"
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
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight: "3px white solid",
          padding:"10px 0",
          color:"transparent",
          
          
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
   <section>
    <Slider {...settings} >
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
   </section>
  )
}

export default Banner