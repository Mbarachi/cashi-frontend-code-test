import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";

export type DashboardStats = {
    mostRecentTransactions: any[];
    expenses: { amount: number; currency: string };
    income: { amount: number; currency: string };
};

export const useDashboardStats = () => {
    return useQuery<DashboardStats>({
        queryKey: ["dashboardStats"],
        queryFn: async () => {
            const data = await dashboardService.getStats();
            return data;
        },
        enabled: true,
    });
};
