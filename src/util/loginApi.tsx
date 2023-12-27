import axios from "axios";

const API = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {
        "Content-Type": "application/json",
    },
});

export const loginApi = async (username: string, password: string) => {
    try {
        const response = await API.post('/login', { username, password });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Server responded with an error:", error.response.data);
            return Promise.reject(error.response.data);
        } else if (error.request) {
            console.error("No response received from the server");
            return Promise.reject({ message: "No response received from the server" });
        } else {
            console.error("Error setting up the request:", error.message);
            return Promise.reject({ message: "Error setting up the request" });
        }
    }
};
