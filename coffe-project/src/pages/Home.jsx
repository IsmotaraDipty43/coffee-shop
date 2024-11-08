import Banner from "../Component/Banner";
import Catagories from '../Component/Catagories'
import Heading from "../Component/Heading";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();
  
    return (
        <div>
            {/* Banner */}
            <Banner />
            <Heading 
                title="Discover Your Perfect Brew" 
                subtitle="Find Your Ideal Cup—From Bold Roasts to Smooth Blends" 
            />
            {/* Categories */}
            <Catagories categories={categories} ></Catagories>
            <Outlet></Outlet>
   
        </div>
    );
};

export default Home;
