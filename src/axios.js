import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktokapp-mern-backend.herokuapp.com/"
});

export default instance;