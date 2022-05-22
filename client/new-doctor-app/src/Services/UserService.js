import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
    return axios.get(API_URL, { headers: authHeader() });
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default UserService;