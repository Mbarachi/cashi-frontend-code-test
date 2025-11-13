interface TransactionTableProps {
    merchant: string;
    date: string;
    amount: string;
    positive?: boolean;
}

export const TransactionTable: React.FC<{ transactions: TransactionTableProps[] }> = ({ transactions }) => (
    <div className="rounded-lg overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 bg-gray-100 px-6 py-3">
            <p className="text-sm font-semibold text-text-light-secondary">Merchant</p>
            <p className="text-sm font-semibold text-text-light-secondary">Date</p>
            <p className="text-sm font-semibold text-text-light-secondary text-right">Amount</p>
        </div>

        {/* Transactions */}
        {transactions.slice(0, 5).map((tx, idx) => (
            <div
                key={idx}
                className="grid grid-cols-3 gap-4 items-center px-6 py-4 hover:bg-gray-50 transition-colors"
            >
                <p className="text-sm font-medium text-text-light-primary">{tx.merchant}</p>
                <p className="text-sm text-text-light-secondary">{tx.date}</p>
                <p
                    className={`text-sm font-medium text-right ${tx.positive ? 'text-positive' : 'text-negative'
                        }`}
                >
                    {tx.amount}
                </p>
            </div>
        ))}
    </div>
);