import React, { useContext } from 'react'

import { useParams } from 'react-router-dom';
import { ShopContext } from './Context/ShopContext';
import Productdisplay from './Productdisplay';
import Footer from "./Footer"
import Comment from "./Comment/Comments"
const Product = () => {

    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
    
  return (
    <>
    <div>
      <Productdisplay product={product} />
      <Comment />
      <Footer />
    </div>
    </>
  )
}

export default Product