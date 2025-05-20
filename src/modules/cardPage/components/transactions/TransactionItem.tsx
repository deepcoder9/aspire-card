import { formatAmount } from "../../../../utils/helpers";
import {
  RefundIcon,
  ChargeIcon,
  ShoppingIcon,
  TravelIcon,
  MarketingIcon,
} from "../../../../assets/icons";
import { ChevronRight } from "../../../../assets/icons";
import { Transaction } from "../../../../types";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const getTransactionIcon = () => {
    let categoryIcon;
    switch (transaction.category) {
      case "shopping":
        categoryIcon = <TravelIcon className="w-10 h-10" />;
        break;
      case "travel":
        categoryIcon = <TravelIcon className="w-10 h-10" />;
        break;
      case "marketing":
        categoryIcon = <ShoppingIcon className="w-10 h-10" />;
        break;
      default:
        categoryIcon = <MarketingIcon className="w-10 h-10" />;
    }

    return categoryIcon;
  };

  const getTransactionTypeIcon = () => {
    return transaction.type === "refund" ? (
      <RefundIcon className="w-5 h-5" />
    ) : (
      <ChargeIcon className="w-5 h-5" />
    );
  };

  const isPositive = transaction.amount > 0;

  return (
    <div className="py-4 flex items-center justify-between border-b border-gray-100 last:border-0">
      <div className="flex items-center">
        <div className="mr-4">{getTransactionIcon()}</div>
        <div>
          <h4 className="font-medium text-gray-800">{transaction.name}</h4>
          <p className="text-sm text-gray-500">{transaction.date}</p>
          <div className="flex items-center mt-1">
            {getTransactionTypeIcon()}
            <span className="ml-2 text-sm text-blue-600">
              {transaction.type === "refund"
                ? "Refund on debit card"
                : "Charged to debit card"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={`font-medium text-lg ${
            isPositive ? "text-green-500" : "text-gray-700"
          }`}
        >
          {formatAmount(transaction.amount)}
        </span>
        <ChevronRight className="ml-2 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default TransactionItem;
