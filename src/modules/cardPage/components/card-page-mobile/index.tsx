import { AccordionItemModal } from "../../../../types/accordion";
import CardPageMobileView from "./CardPageMobile.view";

const CardPageMobileController = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  return <CardPageMobileView accordionItems={accordionItems} />;
};

export default CardPageMobileController;
