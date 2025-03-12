import axios from "axios";
export const login = (data) => axios.post("http://localhost:5000/api/login", data);
export const signup = (data) => axios.post("http://localhost:5000/api/signup", data);
export const sendMessage = (data) => axios.post("http://localhost:5000/api/chat", data);
