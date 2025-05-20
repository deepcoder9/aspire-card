import { TransactionsIcon } from "../../assets/icons";
import { CardDetailsIcon } from "../../assets/icons";
import MainLayout from "../../components/layout/MainLayout";
import { useCardStore } from "../../store/cardStore";
import { AccordionItemModal } from "../../types/accordion";
import CardPageView from "./cardPage.view";
import CardDetails from "./components/card-details/CardDetails";
import TransactionList from "./components/transactions/TransactionList";

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
      icon: <CardDetailsIcon className="w-6 h-6" />,
      component: <CardDetails currentCard={currentCard} />,
    },
    {
      title: "Recent transactions",
      icon: <TransactionsIcon className="w-6 h-6" />,
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
