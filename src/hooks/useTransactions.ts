import { useQuery } from "@tanstack/react-query";
import { transactionService } from "@/services/transactionService";
import type { TransactionResponse } from "@/types/transaction";

export const useTransactions = () => {
    return useQuery<TransactionResponse>({
        queryKey: ["transactions"],
        queryFn: async () => {
            const data = await transactionService.getTransactionsList();
            return data;
        },
        enabled: true,
    },
    );
}