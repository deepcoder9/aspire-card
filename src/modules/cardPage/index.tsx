import MainLayout from "../../components/layout/MainLayout";
import { useCardStore } from "../../store/cardStore";
import { AccordionItemModal } from "../../types/accordion";
import CardPageView from "./cardPage.view";
import CardDetails from "./components/card-details/CardDetails";
import TransactionList from "./components/transactions/TransactionList";
import CardIcon from "@/assets/svgs/card_icon.svg";
import TransactionIcon from "@/assets/svgs/transaction_icon.svg";

const CardPageController = () => {
  const currentCard = useCardStore((state) => state.getCurrentCard());
  const getCardTransactions = useCardStore(
    (state) => state.getCardTransactions
  );

  if (!currentCard) {
    return <div>No card selected</div>;
  }

  const transactions = getCardTransactions(currentCard.id);
  const accordionItems: AccordionItemModal[] = [
    {
      title: "Card details",
      icon: <img src={CardIcon} alt="Card Icon" />,
      component: <CardDetails currentCard={currentCard} />,
    },
    {
      title: "Recent transactions",
      icon: <img src={TransactionIcon} alt="Transactions Icon" />,
      component: <TransactionList transactions={transactions} />,
    },
  ];

  return (
    <MainLayout>
      <CardPageView accordionItems={accordionItems} />
    </MainLayout>
  );
};

export default CardPageController;
