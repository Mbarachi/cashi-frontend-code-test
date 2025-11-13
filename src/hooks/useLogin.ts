import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/authService";
import type { User, LoginCredentials } from "@/types/auth";
import axios from "axios";

export const useLogin = () => {
    return useMutation<User, unknown, LoginCredentials>({
        mutationFn: async (credentials) => authService.login(credentials),
        onSuccess: (data) => {
            return data
        },
        onError: (error) => {
            let errorMessage = "An error occurred. Please try again.";
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const data = error.response.data as { message?: string };
                    errorMessage = data?.message ?? errorMessage;
                };
            }
            alert(errorMessage);
        }
    });
};