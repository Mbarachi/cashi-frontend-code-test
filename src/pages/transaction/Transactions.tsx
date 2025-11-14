import React, { useState } from "react";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import { TransactionTable } from "@components/transactions/TransactionTable";
import { useTransactions } from "@/hooks/useTransactions";


export const TransactionsPage: React.FC = () => {
  const [merchantFilter, setMerchantFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const { data: transactionsData, isLoading } = useTransactions();


  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-text-light-primary">Transactions</h1>
        <p className="text-sm text-text-light-secondary mt-1">
          View and manage all your financial activities
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-4 flex-wrap">
        {/* Merchant Filter */}
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label className="text-sm text-gray-500 mb-1">Filter by Merchant</label>
          <Input
            placeholder="Search..."
            value={merchantFilter}
            onChange={(e) => setMerchantFilter(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Date Filter */}
        <div className="flex flex-col flex-1 min-w-[150px]">
          <label className="text-sm text-gray-500 mb-1">Filter by Date</label>
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex-none">
          <Button
            size="sm"
            className="w-full sm:w-auto"
            onClick={() => {
              setMerchantFilter("");
              setDateFilter("");
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <TransactionTable transactions={transactionsData?.items ?? []} />
        <div className="flex justify-end p-4 border-t border-border-light text-sm text-gray-500">
          Page 1 of 1
        </div>
      </div>
    </div>
  );
};