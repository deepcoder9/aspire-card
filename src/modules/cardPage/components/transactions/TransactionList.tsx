import { Transaction } from "../../../../types";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="divide-y divide-gray-100">
      {transactions.length === 0 ? (
        <div className="py-6 text-center text-gray-500">
          No transactions found
        </div>
      ) : (
        transactions.map((transaction: Transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}

      {transactions.length > 0 && (
        <div className="pt-4 pb-2 text-center">
          <button className="text-green-500 font-medium hover:underline">
            View all card transactions
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
