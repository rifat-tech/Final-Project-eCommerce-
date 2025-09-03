import React from 'react'
import Container from './Container'
// import arive1 from "../assets/arive_1.png"
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
import { useContext } from 'react'
import { ApiData } from './Contextapi'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Newarrivals = () => {
  let Data=useContext(ApiData)
  const  Productslider = {
   dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    

    
    
    
  }
  return (
    <div className='pb-[50px]'>
        <Container>
           <h2 className='text-[#262626] text-[36px] font-bold font-navfont py-2'>New Arraivals</h2>
           <div>
           <Slider {...Productslider} className='Newarrivals-slider '>
{Data.map((item)=>(

<div className=' w-[24%] '>
          <div className='relative group '>
            <div className='max-w-full h-[300px] flex items-center justify-center overflow-hidden '>
            <img 
            src={item.thumbnail} 
            alt={item.title} 
  className="max-h-[200px] max-w-[300px] object-contain" 
/>
            
            </div>
              
  {/* Hover Part*/}
                <div className='bg-white absolute bottom-0 left-0 w-full  object-contain mx-auto  opacity-0  group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out '> 
              <ul className='pr-2 pt-4 pb-4  '>
                <li className='flex items-center gap-4 justify-end'>Add to Wish Lists <span><FaHeart /></span> </li>
                <li className='flex items-center gap-1 justify-end py-2'>Compare <span><MdLoop /></span></li>
                <li className='flex items-center gap-1 justify-end'>Add to Cart <span><FaShoppingCart /></span></li>
              </ul>
            </div>
            </div>
          
          
            <div>
              <div className='mt-2   text-center text-[14px]' >
                <h3 className='px-2.5'>{item.title}</h3>
                <p><span className='text-[20px] mr-0.5'>৳</span>{item.price}</p>
              </div>
              <p>{item.count}</p>
            </div>

            </div>

           ))}
            
           </Slider>
           
            
  
           </div>
        </Container>
    </div>
  )
}

export default Newarrivals