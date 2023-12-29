import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import Blogs from "../Pages/Blogs/Blogs";
import EditBlogs from "../Pages/EditBlogs/EditBlogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><AddBlogs /></PrivateRoute>
            },
            {
                path: '/edit-blogs/:id',
                element: <PrivateRoute><EditBlogs /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    }
]);

export default router;