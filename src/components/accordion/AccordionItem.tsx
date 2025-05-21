import clsx from "clsx";
import { ChevronDown } from "../../assets/icons";
import React from "react";
import { useCardStore } from "../../store/cardStore";

const AccordionItem = ({
  title,
  icon,
  children,
  isOpen,
  toggle,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) => {
  const currentCard = useCardStore((state) => state.getCurrentCard());
  const getCardTransactions = useCardStore(
    (state) => state.getCardTransactions
  );

  const transactions = getCardTransactions(currentCard?.id || "");

  return (
    <div>
      <div style={{ zIndex: 9 }} className="relative border border-gray-200 rounded-lg bg-white">
        <div
          className="flex items-center justify-between p-4 cursor-pointer bg-[#F5F9FF]"
          onClick={toggle}
        >
          <div className="flex items-center">
            <span className="mr-3 text-blue-600">{icon}</span>
            <span className="font-medium text-gray-800">{title}</span>
          </div>
          <ChevronDown
            className={clsx(
              "transition-transform duration-300 w-6 h-6",
              isOpen ? "transform rotate-180" : ""
            )}
          />
        </div>

        <div
          className={clsx(
            "transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="p-4 border-t border-gray-200">{children}</div>
        </div>
      </div>
      {isOpen && title === "Recent transactions" && transactions.length > 0 && (
        <div
          style={{ zIndex: 1 }}
          className="pt-5 p-4 text-center border bg-[#EDFFF5] border-[#DDFFEC] cursor-pointer border-t-0 rounded-b-lg relative mt-[-4px] p-[18px]"
        >
          <button className="text-[#01D167] font-medium hover:underline">
            View all card transactions
          </button>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
