import useIsMobile from "../../hooks/useIsMobile";
import CardPageDesktopController from "./components/card-page-desktop";
import CardPageMobileController from "./components/card-page-mobile";
import AddNewCardModal from "./components/cards/NewCardModal";
import { AccordionItemModal } from "../../types/accordion";

const CardPageView = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <CardPageMobileController accordionItems={accordionItems} />
      ) : (
        <CardPageDesktopController accordionItems={accordionItems} />
      )}
      <AddNewCardModal />
    </div>
  );
};

export default CardPageView;
