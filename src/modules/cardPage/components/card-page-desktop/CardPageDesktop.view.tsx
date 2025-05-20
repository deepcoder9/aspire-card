import Accordion from "../../../../components/accordion/Accordion";
import CardActions from "../../../../modules/cardPage/components/cards/CardActions";
import CardCarousel from "../../../../modules/cardPage/components/cards/CardCarousel";
import { AccordionItemModal } from "../../../../types/accordion";

const CardPageDesktopView = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  return (
    <div className="w-full grid grid-cols-2 gap-[80px]">
      <div>
        <CardCarousel />
        <CardActions />
      </div>
      <div>
        <Accordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default CardPageDesktopView;
