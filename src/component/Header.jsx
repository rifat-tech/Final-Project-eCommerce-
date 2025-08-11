import React from 'react'
import Container from './Container'
import Logo from "../assets/Header-logo.png"

const Header = () => {
  return (

    <>
    <Container>
       <div className='flex items-center py-4'>
        <div>
            <img src={Logo} alt="" />
        </div>

        <div className='mx-auto'>
            <ul className='flex gap-x-5  '>
                <li className='text-#262626 font-Header text-[14px]'><a href="">Home</a></li>
                <li className='text-#262626 font-Header text-[14px]'><a href="">Shop</a></li>
                <li className='text-#262626 font-Header text-[14px]'><a href="">About</a></li>
                <li className='text-#262626 font-Header text-[14px]'><a href="">Contacts</a></li>
                <li className=' text-#262626 font-Header text-[14px]'><a href="">Journal</a></li>
                
                
            </ul>
        </div>
       </div>
    </Container>
      
    </>
    
  )
}

export default Header