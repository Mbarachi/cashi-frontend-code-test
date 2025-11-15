import { useQuery } from "@tanstack/react-query";
import { transactionService } from "@/services/transactionService";
import type { TransactionFilters, TransactionResponse } from "@/types/transaction";

export const useTransactions = (filters: TransactionFilters) => {
    return useQuery<TransactionResponse>({
        queryKey: ["transactions", filters],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5s delay
            const data = await transactionService.getTransactionsList(filters);
            return data;
        },
        refetchOnWindowFocus: true,
    },
    );
}