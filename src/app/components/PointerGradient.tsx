"use client";

import { useState } from "react";

const PointerGradient = ({ position }: any) => {
    return (
        <div
            style={{ left: position.x - 24, top: position.y - 24 }}
            className="h-[12rem] w-[12rem] blur-[180px] absolute top-12 left-0 bg-gradient-to-tr from-[#1d4ed826] to-violet-600"
        />
    );
};

export default PointerGradient;
