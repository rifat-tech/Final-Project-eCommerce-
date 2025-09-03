
import React from 'react'
import Container from './Container'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'

const Fotter = () => {
  return (
    <section className='bg-[#F5F5F3] w-full'>
    <Container>
        <div className='flex pt-[50px]'>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[14px] text-[#000]' href="#">MENU</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Home</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Shop</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">About</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Contact</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Journal</a></li>
                </ul>
                <div className='flex gap-3 py-10 font-medium'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <AiFillInstagram />


                </div>
            </div>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[14px] text-[#000]' href="#">SHOP</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Smart Phones</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Laptop</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Accesories</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">E-Book</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">StarLink</a></li>
                </ul>
            </div>
            <div className='w-1/6'>
                <ul>
                    <li><a className='font-dm font-bold text-[14px] text-[#000]' href="#">HELP</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626] ' href="#">Privacy Policy</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626] ' href="#">Terms & Conditions</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Special E-shop</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Shipping</a></li>
                    <li><a className='font-dm font-normal text-[12px] text-[#6D6D6D] hover:text-[#262626]' href="#">Secure Payments</a></li>
                </ul>
            </div>
            <div className='w-1/6'>
                <p className='font-dm font-Header text-[#6D6D6D] hover:text-[#262626]'>(+88) 01515282978</p>
                <p className='font-dm font-Header text-[14px] text-[#000] hover:text-[#262626] mt-1.5'>gigexa.com</p>
                <p className='font-dm font-Header text-[12px] text-[#6D6D6D] hover:text-[#262626] mt-1.5'>Aftabnagar, Dhaka, Bangladesh</p>
            </div>
            <div className='w-2/6 pl-8'>
                <h1 className='text-3xl font-black'>GIG EXA</h1>
                <div className=''><p className='pt-[170px] font-dm font-normal text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p></div>
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Fotter