import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/add-blogs',
                element: <AddBlogs />
            },
        ]
    },
]);

export default router;