import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ProductImagesSlider({ ProductImage, setselectedImg }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(ProductImage)
console.log(currentIndex)
  const previousImage = () => {
    const newIndex = currentIndex === 0 ? ProductImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex === ProductImage.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="m-5 outline bg-slate-500 h-[80px] flex-col justify-center relative overflow-hidden">
      <div
        className="absolute left-6 top-1 text-xl"
        onClick={previousImage}
      >
        <IoIosArrowUp />
      </div>

      <div className={`translate-y-[${scroll}px]`}>
        
            <div
              className="m-2 mt-6 outline"
              onClick={()=>setselectedImg(ProductImage[currentIndex].img)}
            >
              <img src={ProductImage[currentIndex].img} width="50" alt="" />
            </div>
          
      </div>

      <div
        className="absolute bottom-1 left-6 text-xl"
        onClick={nextImage}
      >
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default ProductImagesSlider;
