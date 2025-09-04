import React from 'react'
import Container from './Container'
import image_one from "../assets/price_image_one.png"
import image_two from "../assets/price_image_two.png"
import image_three from "../assets/price_image_three.png"

const Salepart = () => {
  return (
  <section>
        <Container>
            <div className='flex gap-x-5 py-15'>
                <div>
                    <img src={image_one} alt="" />
                </div>
                <div >
                    <div className='mb-[30px]'><img src={image_two} alt="" /></div>
                    <div><img src={image_three} alt="" /></div>
                    
                    
                </div>
                
            </div>
        </Container>
        </section>
    
  )
}

export default Salepart