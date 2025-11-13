import axios from "axios";

export const apiClient = axios.create({
    baseURL: "/",
    withCredentials: true, 
    headers: {
        "Content-Type": "application/json",
    },
});

// Optional: interceptors for logging or error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;
