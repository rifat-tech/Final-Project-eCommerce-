import React from 'react'
import Container from './Container'
import arive1 from "../assets/arive_1.png"
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'

const Newarrivals = () => {
  return (
    <div>
        <Container>
           <h2 className='text-[#262626] text-[36px] font-bold font-navfont'>New Arraivals</h2>
           <div>
            <div className=' w-[24%] '>
          <div className='relative group '>
              <img src={arive1} alt="#" />
  {/* Hover Part*/}
                <div className='bg-white absolute bottom-0 left-0 w-full opacity-0  group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-800 ease-in-out '> 
              <ul className='pr-2 pt-4 pb-4  '>
                <li className='flex items-center gap-4 justify-end'>Add to Wish Lists <span><FaHeart /></span> </li>
                <li className='flex items-center gap-1 justify-end py-2'>Compare <span><MdLoop /></span></li>
                <li className='flex items-center gap-1 justify-end'>Add to Cart <span><FaShoppingCart /></span></li>
              </ul>
            </div>
            </div>
          
          
            <div>
              <div>
                <h3>Basic Crew Neck Tee</h3>
                <p>Black</p>
              </div>
              <p>$20</p>
            </div>

            </div>
  
           </div>
        </Container>
    </div>
  )
}

export default Newarrivals