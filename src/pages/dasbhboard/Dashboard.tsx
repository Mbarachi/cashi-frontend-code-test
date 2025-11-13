import { AppLayout } from "@components/layout/AppLayout";
import WelcomeBanner from "./WelcomeBanner";
import { SummaryCard } from "@components/cards/SummaryCard";
import { RecentTransactions } from "@components/transactions/RecentTransactions";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

export const Dashboard: React.FC = () => {
  const transactions = [
    { merchant: 'Costco Wholesale', date: 'Oct 28, 2023', amount: '-$154.21' },
    { merchant: 'Salary Deposit', date: 'Oct 27, 2023', amount: '+$2,500.00' },
    { merchant: 'Starbucks', date: 'Oct 26, 2023', amount: '-$6.85', icon: 'coffee' },
    { merchant: 'AT&T Mobility Bill', date: 'Oct 25, 2023', amount: '-$85.00' },
    { merchant: 'Shell Gas Station', date: 'Oct 24, 2023', amount: '-$55.30' },
  ];

  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl">
        <WelcomeBanner name="Alex" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex flex-col justify-between rounded-xl bg-surface-light p-6 border border-border-light">
            <div>
              <p className="text-text-light-secondary text-sm font-medium mb-1">Account Balance</p>
              <p className="text-text-light-primary text-4xl font-bold leading-tight tracking-[-0.033em]">$12,450.75</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold">Add Funds</button>
              <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold">Transfer</button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SummaryCard icon={TrendingUp} title="Income this Month" value="$5,650.00" />
            <SummaryCard icon={TrendingDown} title="Expenses this Month" value="$2,130.50" bgColor="bg-red-500/10" />
            <SummaryCard icon={Wallet} title="Net Cash Flow" value="$3,519.50" bgColor="bg-blue-500/10" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-text-light-primary text-xl font-bold leading-tight tracking-[-0.015em]">Recent Transactions</h2>
            <a className="text-primary text-sm font-semibold hover:underline" href="#">View All</a>
          </div>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
    </AppLayout>
  );
};