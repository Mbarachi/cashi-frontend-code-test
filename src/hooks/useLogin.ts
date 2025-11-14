import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/authService";
import type { LoginCredentials, User } from "@/types/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (credentials: LoginCredentials) => authService.login(credentials),
        onSuccess: (user: User) => {
            // Cache the logged-in user data
            queryClient.setQueryData(["currentUser"], user);

            // Redirect to dashboard
            navigate("/dashboard");
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