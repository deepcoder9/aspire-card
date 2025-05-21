import { useState } from "react";
import { AccordionItemModal } from "../../types/accordion";
import AccordionItem from "./AccordionItem";

const Accordion = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({
    1: true,
  });

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full mb-6 flex flex-col gap-4">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          isOpen={!!openStates[index]}
          toggle={() => toggleAccordion(index)}
        >
          {item.component}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
