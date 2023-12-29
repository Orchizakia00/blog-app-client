import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const axios = useAxios();

    const onSubmit = async (data) => {

        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile updated successfully');
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        console.log(userInfo);
                        axios.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {
                                    toast.success('User Created Successfully!')
                                    navigate('/')
                                }
                            })

                    })
            })


    };

    return (
        <div className="p-6 lg:py-10 lg:px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Register Now!</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <img src="https://i.ibb.co/7GdMRPn/sign-page-abstract-concept-illustration-335657-2242.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>

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
                        <p className="text-center mt-7">Already have an account? Please <Link to={'/login'}><span className="font-bold text-blue-500">Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;