import React from 'react'
import Container from './Container'
import Logo from "../assets/Header-logo.png" //header logo image

const Header = () => {
  return (

    <>
    <Container>
       <div className='flex  items-center py-4'>
        <div>
            {/* <img src={Logo} alt="" /> */}
            <h1 className='font-extrabold text-3xl'>GIG EXA</h1>
        </div>

        <div className='mx-auto'>
            <ul className='flex gap-x-5  '>
                <li className='  text-[#767676] font-Header text-[14px] transition-bold   hover:text-[#262626]'><a href="">Home</a></li>
                <li className='  text-[#767676] font-Header text-[14px] transition-bold   hover:text-[#262626] '><a href="">Shop</a></li>
                <li className='  text-[#767676] font-Header text-[14px] transition-bold   hover:text-[#262626] '><a href="">About</a></li>
                <li className='  text-[#767676] font-Header text-[14px] transition-bold   hover:text-[#262626] '><a href="">Contacts</a></li>
                <li className='  text-[#767676] font-Header text-[14px] transition-bold   hover:text-[#262626] '><a href="">Journal</a></li>
                
                
            </ul>
        </div>
       </div>
    </Container>
      
    </>
    
  )
}

export default Header