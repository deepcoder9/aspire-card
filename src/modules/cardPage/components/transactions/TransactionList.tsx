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
    </div>
  );
};

export default TransactionList;
