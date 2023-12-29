import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://blog-application-server-lake.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;