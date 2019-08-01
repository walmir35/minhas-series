import axios from "axios";
const api = axios.create({
    //baseURL: "http://localhost:3333"
    baseURL: "http://192.168.0.105:3002"
});
export default api;