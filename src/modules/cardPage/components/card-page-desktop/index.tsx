import CardPageDesktopView from "./CardPageDesktop.view";
import { AccordionItemModal } from "../../../../types/accordion";

const CardPageDesktopController = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  return <CardPageDesktopView accordionItems={accordionItems} />;
};

export default CardPageDesktopController;
