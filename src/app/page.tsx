import Header from "./components/Navigation/Header";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Project from "./components/Projects/Project";
import HomePage from "./components/HomePage";

const Home = () => {
    return (
        <>
            <HomePage>
                <div className="w-[80%] z-20 justify-between mx-auto px-12 h-full items-center  flex">
                    <Header />
                    <main className="overflow-y-auto h-screen  ml-auto w-[47%] mr-12  text-slate-200">
                        <Main />
                        <Experience />
                        <Project />
                    </main>
                </div>
            </HomePage>
        </>
    );
};

export default Home;
