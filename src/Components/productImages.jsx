import React, { useEffect, useState } from 'react'
import ProductImagesSlider from './ProductImagesSlider';
import FullSizeImage from './FullSizeImage';

function ProductImages({imageList}) {
    const [ProductImage,setProductImages]=useState([]);
    const [selectedImg,setselectedImg]=useState("");
    useEffect(()=>{
        setProductImages(imageList)
    })
  return (
    <div className='flex'>
        <ProductImagesSlider ProductImage={ProductImage} setselectedImg={setselectedImg}/>
        
            <FullSizeImage selectedImg={selectedImg}/>
        
    </div>
  )
}

export default ProductImages