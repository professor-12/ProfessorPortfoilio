const PointerGradient = ({ position }: any) => {
    return (
        <div>
            <div
                style={{ left: position.x - 24, top: position.y - 24 }}
                className="h-[15rem]  w-[15rem] blur-[180px] absolute bg-gradient-to-tr from-[#1d4ed826] to-violet-600"
            />
        </div>
    );
};

export default PointerGradient;
