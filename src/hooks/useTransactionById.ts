import { useQuery } from "@tanstack/react-query";
import { transactionService } from "@/services/transactionService";
import type { Transaction } from "@/types/transaction";

export const useTransactionById = (id: string) => {
    return useQuery<Transaction>({
        queryKey: ["transaction", id],
        queryFn: async () => {
            const data = await transactionService.getTransactionById(id);
            return data;
        },
        refetchOnWindowFocus: false,
        enabled: !!id,
    });
};