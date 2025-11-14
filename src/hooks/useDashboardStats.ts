import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";
import type { Transaction } from "@/types/transaction";

export type DashboardStats = {
    mostRecentTransactions: Transaction[];
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
