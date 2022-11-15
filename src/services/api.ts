import axios from "axios";
import { getCookie } from "../constants/cookie";

export const driveApi = axios.create({
    baseURL: "http://localhost:3002"
})

const token = getCookie("token")

export const sendFile = async (file: any) => {
    await driveApi.post("files", file, 
    {
        headers: {
            "Content-Type": `multipart/form-data; boundary=${file._boundary}`,
            "Authorization": `Bearer ${token}`
        },
    });
}

export const getFilesFromUser = async () => {
    const files = await driveApi.get("files", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    return files;
}

export const getSignedUrl = async (key: string) => {
    const { data } = await driveApi.post("files/download", { key },
    {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    return data;
}

export const deleteFile = async (key: string) => {
    const { data } = await driveApi.delete("/files", { data: { key }, headers: {
        "Authorization": `Bearer ${token}`
    }})

    return data;
}