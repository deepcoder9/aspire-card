import Accordion from "../../../../components/accordion/Accordion";
import CardActions from "../../../../modules/cardPage/components/cards/CardActions";
import CardCarousel from "../../../../modules/cardPage/components/cards/CardCarousel";
import Header from "../../../../components/header/Header";
import MobileNavbar from "../../../../components/mobileNavBar/MobileNavBar";
import TabBar from "../../../../components/tabBar/TabBar";
import { AccordionItemModal } from "../../../../types/accordion";

const CardPageMobileView = ({
  accordionItems,
}: {
  accordionItems: AccordionItemModal[];
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MobileNavbar />
      <div className="flex flex-col fixed inset-0 z-[1000] bg-[#0C365A]">
        <Header />
        <TabBar />
        <div className="bg-[#0B2B4B] h-full">
          <CardCarousel />
        </div>
      </div>
      <div className="bg-white rounded-[20px] relative top-[55vh] z-[9999]">
        <CardActions />
        <div className="p-6 mb-16">
          <Accordion accordionItems={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default CardPageMobileView;
