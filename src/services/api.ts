import axios from "axios";

export const driveApi = axios.create({
    baseURL: "http://localhost:3002"
})