import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/appointments/";

const config = { headers: authHeader() };

const getAll = () => {
    return axios.get(API_URL, config, {
    });
};

const get = (id) => {
    return axios.get(API_URL + {id}, config, {
    });
};

const create = (data) => {
    return axios.post(API_URL  + "/add", config, data);
};

const update = (id, data) => {
    return axios.put(API_URL  + "/update" + {id}, config, data);
};

const remove = (id) => {
    return axios.delete(API_URL  + "/delete" + {id}, config);
};

const DoctorService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default DoctorService;