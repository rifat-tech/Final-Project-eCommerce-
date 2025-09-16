import React from 'react'
import Container from '../component/Container'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>       
    <Container>
        <div>
            <h2>Products</h2>
            <p>
                <Link to = "/">Home</Link> <Link to="/Product">Product</Link>
                </p>
        </div>

    </Container>


    </div>
    
  )
}

export default Product