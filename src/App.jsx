import React, { useState } from "react";
import ColorOption from "./Components/colorOption";
import ProductImages from "./Components/productImages";
import {initial} from "./Constants/images";
const App = () => {
  
  const [imageList,setimageList]=useState(initial);
  return (
    <>
     <ColorOption setimageList={setimageList}/>
     <ProductImages imageList={imageList}/>
    </>
  );
};

export default App;
