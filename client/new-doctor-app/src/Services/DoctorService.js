import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/doctors/";

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

//TODO:backendben még nincs
const removeAll = () => {
    return axios.delete(API_URL  + "/delete", config);
};
//TODO:backendben még nincs
const findByFirstName = (firstName) => {
    return axios.get(API_URL  + "/delete?fistName=\\" + {firstName}, config);
};

const DoctorService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByFirstName,
};
export default DoctorService;