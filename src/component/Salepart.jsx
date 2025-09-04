import React from 'react'
import Container from './Container'
import sales_one from "../assets/price_image_one.png";
import sales_two from "../assets/price_image_two.png";
import sales_three from "../assets/price_image_three.png";

const Salepart = () => {
  return (
  <section>
        <Container>
            <div className='flex gap-x-5 py-15'>
                <div>
                    <img src={sales_one} alt="" />
                </div>
                <div >
                    <div className='mb-[30px]'><img src={sales_two} alt="" /></div>
                    <div><img src={sales_three} alt="" /></div>
                    
                    
                </div>
                
            </div>
        </Container>
        </section>
    
  )
}

export default Salepart