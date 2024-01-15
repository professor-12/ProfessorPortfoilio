"use client";
import { MouseEvent, useState } from "react";
import PointerGradient from "./components/PointerGradient";

const Home = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });

    const handleChange = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });

        console.log(position);
    };
    return (
        <div className="w-full h-screen overflow-hidden" onMouseMove={(e) => handleChange(e)}>
            <PointerGradient position={position} />
        </div>
    );
};

export default Home;
