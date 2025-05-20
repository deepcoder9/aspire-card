import clsx from "clsx";
import { ChevronDown } from "../../assets/icons";
import React from "react";

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
  return (
    <div className="border border-gray-200 rounded-lg mb-4 bg-white">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
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
  );
};

export default AccordionItem;
