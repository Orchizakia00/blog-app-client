import Banner from "../../Componaents/Banner/Banner";
import useCurrentPath from "../../Hooks/useCurrentPath";

const Home = () => {
    const currentPath = useCurrentPath();
    return (
        <div>
            <Banner />
            <p>Current Path: {currentPath}</p>
        </div>
    );
};

export default Home;