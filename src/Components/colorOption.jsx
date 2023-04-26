import React from "react";
import color from "../Constants/images";
function ColorOption({ setimageList }) {
  return (
    <>
      <div className="flex">
        {color.map((val, i) => {
          return (
            <div
              className="outline ml-4 mt-4 bg-neutral-800 text-gray-400"
              onClick={() => {
                setimageList(val.productPictures);
              }}
            >
              {val.colorName}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ColorOption;
