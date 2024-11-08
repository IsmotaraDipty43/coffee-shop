

// eslint-disable-next-line react/prop-types
const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12 space-y-2">
            <h1 className="text-center text-5xl ">{title}</h1>
            <p className="text-center text-lg font-thin ">{subtitle}</p>
        </div>
    );
};

export default Heading;