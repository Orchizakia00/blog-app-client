import { Outlet } from "react-router-dom";
import Navbar from "../Componaents/Navbar/Navbar";
import Footer from "../Componaents/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[85%] mx-auto"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default MainLayout;