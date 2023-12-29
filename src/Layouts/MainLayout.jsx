import { Outlet } from "react-router-dom";
import Navbar from "../Componaents/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="w-[85%] mx-auto"><Outlet /></div>
        </div>
    );
};

export default MainLayout;