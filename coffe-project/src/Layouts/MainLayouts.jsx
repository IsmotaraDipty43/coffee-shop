import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navber from "../Component/Navber";


const MainLayouts = () => {
    return (
        <div>
        <div className="h-16">
        <Navber></Navber>
        </div>
            {/* dynamic part */}
            <div className="min-h-[calc(100vh-228px)] py-10 container mx-auto px-10 ">
           <Outlet>

           </Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayouts;