/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <span className="loading loading-spinner text-info"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;