import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    const onSubmit = async (data) => {

        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Logged In Successfully!");
                navigate(from, { replace: true });
            })


    };

    return (
        <div className="p-6 lg:py-10 lg:px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Login Now!</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <img src="https://i.ibb.co/7GdMRPn/sign-page-abstract-concept-illustration-335657-2242.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('email', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>


                        {/* password */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                {...register('password', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>

                        <button className="btn btn-block mt-6 bg-blue-600 text-white hover:bg-blue-400 hover:text-black">
                            Login
                        </button>
                        <p className="text-center mt-7">Do not have an account? Please <Link to={'/register'}><span className="font-bold text-blue-500">Register</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;