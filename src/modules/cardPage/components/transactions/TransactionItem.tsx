import { formatAmount } from "../../../../utils/helpers";
import { BussinessCardIcon } from "../../../../assets/icons";
import { ChevronRight } from "../../../../assets/icons";
import { Transaction } from "../../../../types";

import FileStorageIcon from "@/assets/svgs/file_storage.svg";
import FlightIcon from "@/assets/svgs/flights.svg";
import MegaPhoneIcon from "@/assets/svgs/megaphone.svg";
import { useMemo } from "react";
const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const getTransactionIcon = useMemo(() => {
    let categoryIcon: { icon: React.ReactNode; bg: string } | null = null;
    switch (transaction.category) {
      case "shopping":
        categoryIcon = {
          icon: <img src={FileStorageIcon} />,
          bg: "#009DFF1A",
        };
        break;
      case "travel":
        categoryIcon = {
          icon: <img src={FlightIcon} />,
          bg: "#00D6B51A",
        };
        break;
      case "marketing":
        categoryIcon = {
          icon: <img src={MegaPhoneIcon} />,
          bg: "#F251951A",
        };
        break;
      default:
        categoryIcon = {
          icon: <img src={FileStorageIcon} />,
          bg: "#009DFF1A",
        };
    }

    return categoryIcon;
  }, [transaction.category]);

  const isPositive = transaction.amount > 0;

  return (
    <div className="py-4 flex items-center justify-between border-b border-gray-100 last:border-0">
      <div className="flex items-center">
        <div className="mr-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: getTransactionIcon?.bg }}
          >
            {getTransactionIcon?.icon}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-sm text-gray-800">
            {transaction.name}
          </h4>
          <p className="text-[13px] text-[#707070]">{transaction.date}</p>
          <div className="flex items-center mt-1">
            <div className="w-6 h-5 rounded-full bg-[#325BAF] flex items-center justify-center">
              <BussinessCardIcon />
            </div>
            <span className="ml-2 text-[12px] text-[#325BAF]">
              {transaction.type === "refund"
                ? "Refund on debit card"
                : "Charged to debit card"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className={`font-medium text-sm ${
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
