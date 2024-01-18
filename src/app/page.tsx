"use client";
import { MouseEvent, useState } from "react";
import PointerGradient from "./components/PointerGradient";
import Header from "./components/Navigation/Header";
import Main from "./components/Main";
import Experience from "./components/Experience";

const Home = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });

    const handleChange = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(position);
    };
    return (
        <>
            <PointerGradient position={position} />
            <div
                className="w-full  relative z-30 h-screen overflow-hidden"
                onMouseMove={(e) => handleChange(e)}
            >
                <div className="w-[80%] z-20 justify-between mx-auto px-12 h-full items-center  flex">
                    <Header />
                    <main className="overflow-y-auto h-screen  ml-auto w-[49%]  text-slate-200">
                        <Main />
                        <Experience />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Home;
