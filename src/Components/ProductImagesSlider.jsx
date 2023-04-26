import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ProductImagesSlider({ ProductImage, setselectedImg }) {
  const [scroll, setscroll] = useState(0);
  return (
    <div className="m-5 outline bg-slate-500 h-[200px] flex-col justify-center relative overflow-hidden">
      <div
        className="absolute left-6 top-1 text-xl"
        onClick={() => {
          let v = scroll + 50;
          console.log(v);
          return setscroll(v);
        }}
      >
        <IoIosArrowUp />
      </div>

      <div className={`translate-y-[${scroll}px]`}>
        {ProductImage.map((val) => {
          return (
            <div
              className="m-2 outline"
              onClick={() => {
                setselectedImg(val.img);
              }}
            >
              <img src={val.img} width="50" alt="" />
            </div>
          );
        })}
      </div>

      <div
        className="absolute bottom-1 left-6 text-xl"
        onClick={() => {
            let v = scroll - 50;
          console.log(v);
          return setscroll(v);

        }}
      >
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default ProductImagesSlider;
