"use client"

import { useState } from "react";


const PointerGradient = () => {
      const [position , setPosition] = useState({x:0,y:0})
  return (
      <div className="h-[12rem] w-[12rem] blur-[120px] absolute top-12 left-0 bg-gradient-to-tr from-[#1d4ed826] to-violet-600">
          PointerGradient
      </div>
  );
}

export default PointerGradient