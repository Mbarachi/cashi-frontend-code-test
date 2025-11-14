import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "@/hooks/useCurrentUser";

interface ProtectedRouteProps {
    children: React.ReactElement;
}


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { data: user, isLoading, isError } = useCurrentUser();

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isError || !user) {
        // Redirect to login if user is not authenticated
        return <Navigate to="/login" replace />;
    }

    // If user is authenticated, render the protected page
    return children;
};
