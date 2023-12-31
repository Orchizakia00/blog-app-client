import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
                toast.success('Logged Out Successfully!')
            })
            .catch(err => console.log(err))
    }

    const navItems = <>
        <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={'/blogs'}><li><a>Blogs</a></li></Link>
        <Link to={'/add-blogs'}><li><a>Add Blogs</a></li></Link>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'}><a className="btn btn-ghost text-xl">Blogs Spot</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <p className="mr-2">{user.displayName}</p>
                }
                {
                    user ? <a onClick={handleLogout} className="btn">Logout</a> : <Link to={'/login'}><a className="btn">Login</a></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;