import apiClient from "@lib/apiClient";

export const dashboardService = {
    getStats: async () => {
        const { data } = await apiClient.get("/api/dashboard/stats");
        return data;
    }
}