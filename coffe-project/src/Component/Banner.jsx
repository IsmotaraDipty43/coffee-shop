import banner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div
            className="hero h-[400px] md:h-[800px] rounded-lg"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Additional content can go here */}
        </div>
    );
};

export default Banner;
