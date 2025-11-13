import apiClient from "@/lib/apiClient";
import type { LoginCredentials, User } from "@/types/auth";

export const authService = {
    login: async (credentials: LoginCredentials): Promise<User> => {
        const { data } = await apiClient.post("/api/auth/login", credentials);
        return data;
    },

    me: async (): Promise<User> => {
        const { data } = await apiClient.get("/api/auth/me");
        return data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post("/api/auth/logout");
    },
};
