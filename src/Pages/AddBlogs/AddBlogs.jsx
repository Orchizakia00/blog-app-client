import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import useCurrentPath from "../../Hooks/useCurrentPath";


const AddBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const axios = useAxios();
    const currentPath = useCurrentPath();

    const onSubmit = async (data) => {

        axios.post('/blogs', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Blog added successfully!');
                    reset();
                }
            })
    };
    return (
        <div className="bg-base-200 p-6 lg:py-10 lg:px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Add New Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex gap-6">
                    {/* title */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Blog Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Note Title"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                    {/* month */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Month</span>
                        </label>
                        <select defaultValue="default" {...register('month', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                </div>

                {/* name */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

                {/* content */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <textarea {...register('content', { required: true })} className="textarea textarea-bordered h-24" placeholder="Content"></textarea>
                </div>

                <button className="btn btn-block mt-6 bg-blue-600 text-white hover:bg-blue-400 hover:text-black">
                    Add Blog
                </button>
            </form>
            <p className="mt-6">Current Path: {currentPath}</p>
        </div>
    );
};

export default AddBlogs;