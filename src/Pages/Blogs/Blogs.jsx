import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Blogs = () => {
    const axios = useAxios();

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get(`/blogs`);
            return res.data;
        }
    });

    const handleDelete = blog => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to delete?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/blogs/${blog._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success(`Blog Deleted!`)
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {
                blogs.map(blog => <div key={blog._id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <p>{blog.content}</p>
                        <p>{blog.month}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/edit-blogs/${blog._id}`}><button className="btn"> <FaEdit size={20}></FaEdit> </button></Link>
                            <button 
                            onClick={() => handleDelete(blog)} 
                            className="btn"> <FaTrashAlt color="red" size={20}></FaTrashAlt> </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blogs;