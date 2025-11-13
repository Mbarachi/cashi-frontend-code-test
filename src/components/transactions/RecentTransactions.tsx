import { TransactionTable } from "./TransactionTable";
import type { LucideIcon } from "lucide-react";

interface Transaction {
    merchant: string;
    date: string;
    category: string;
    amount: string;
    positive?: boolean;
    icon: LucideIcon;
}

interface RecentTransactionsProps {
    transactions: Transaction[];
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => (
    <div className="rounded-xl border border-border-light bg-surface-light overflow-hidden">
        <div className="flex flex-col divide-y divide-border-light">
            <TransactionTable transactions={transactions} />
        </div>
    </div>
);