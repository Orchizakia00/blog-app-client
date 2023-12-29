import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-50px)]" style={{ backgroundImage: 'url(https://i.ibb.co/LYxPpjG/office-3193372-1280.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Chronicles of Curiosity</h1>
                    <p className="mb-5">
                        Embark on a journey of endless fascination at Chronicles of Curiosity. Uncover captivating blogs, embrace curiosity, and explore diverse realms that ignite imagination. Adventure awaits in every click
                    </p>
                    <Link to={'/blogs'}><button className="btn bg-blue-600 text-white hover:bg-blue-400 hover:text-black border-none">Explore Blogs</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;