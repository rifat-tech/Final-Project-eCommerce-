
import Container from './Container'
import naviconlogo from "../assets/navbaricon.png"  //import image for the navigation icon
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';


const Navbar = () => {
    let [category ,setcategory] = useState(false)
    let [accountShow, setAccountShow] = useState(false)
    let categoryRef = useRef()
    let accountRef = useRef()
    useEffect(() => {
        document.addEventListener('click', (e) => { 
            if (categoryRef.current.contains(e.target)){
                setcategory(!category)
            }
            else{
                setcategory(false)
            }
            if (accountRef.current.contains(e.target)){
                setAccountShow(!accountShow)
            }
            else{
                setAccountShow(false)
            }
        })}
,[category,accountShow]) //for Category click option

//for Accunt click option






  return (
    <>
    {/* Navbar section use for Background Colour */}
    
     <section className='bg-[#F5F5F3] py-4'>
<Container>

   <div className='flex items-center'>
    <div className='w-1/4 relative  '>
     

    {/* ON Click Code Start */}
    <div className='flex items-center gap-x-2'ref={categoryRef} >
        <img src={naviconlogo} alt="" /> 
       <h2 className='font-navfont text-[#262626] text-[14px]'>Shop by Category</h2>
    </div>
  {/* Dropdown menu for categories */}{/* For Better easy findings */}
{/* Hover part */}
  
  
    {/* // <div className='bg-black py-3 absolute top-[48px] left-0 w-[60%] opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out'>
    //     <ul>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Accesories</a></li>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Furniture</a></li>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Electronics</a></li>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Clothes</a></li>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Bags</a></li>
    //         <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Home Appliances</a></li>
    //     </ul>
    // </div> */}
 {category &&
      <div className='bg-black py-3 absolute top-[48px] left-0 w-[60%] '>
        <ul>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Accesories</a></li>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Furniture</a></li>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Electronics</a></li>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Clothes</a></li>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Bags</a></li>
            <li className='text-[14px] text-[rgba(255,255,255,0.71)] font-Header] pl-3 hover:text-white py-2'><a href="">Home Appliances</a></li>
        </ul>
    </div>
            }
    </div>
   {/* Here is the search bar and icons */}
    <div className='w-2/4 '>
    <div className=' relative '>
        <input className='w-full bg-white  px-3 py-2 ' type="search"placeholder='Search Products' />
    <div className="absolute top-[50%] right-4 translate-y-[-50%] translate-x-[-50%] " >
    <FaSearch />
  </div>
    </div>
    

    </div>

    {/* Here is the user icon and cart icon */}
    <div className='w-1/4 relative'>
    <div className='flex  justify-end gap-5 '>

{/* Account dropdown menu */}
        <div className='flex items-center  ' ref={accountRef}>
             <FaUserAlt className='mr-2' />
      <MdOutlineArrowDropDown className='mr-5'/>
        </div>
        {/* Dropdown menu for account options for hover*/}
    {/* <div className='absolute top-[24%] right-[125px] translate-y-[-50%] font-Header   bg-white opacity-0 group-hover:opacity-100 transition-all duration-300  invisible ease-in-out group-hover:visible' ref={accountRef}>
        <ul>
            <li className='p-3 bg-white text-black hover:bg-black hover:text-white  '><a href="#">My Account</a></li>
            <li className='p-3 bg-white text-black hover:bg-black hover:text-white ' ><a href="#">Log Out</a></li>
        </ul>
    </div> */}

   

      <FaShoppingCart />
</div>
{ accountShow &&
 <div className='w-[150px] absolute top-[45px] left-[100px]  font-Header   ' >
        <ul>
            <li className='p-3 bg-white text-black hover:bg-black hover:text-white text-center '><a href="#">My Account</a></li>
            <li className='p-3 bg-white text-black hover:bg-black hover:text-white text-center' ><a href="#">Log Out</a></li>
        </ul>
    </div>
}
    </div>
   </div>

    </Container>

    </section>
    
    </>
   
    
  )
}

export default Navbar