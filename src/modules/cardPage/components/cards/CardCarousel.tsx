import { useSwipeable } from "react-swipeable";
import CardDisplay from "./CardDisplay";
import { Eye } from "../../../../assets/icons";
import { useCardStore } from "../../../../store/cardStore";
import { toast } from "react-toastify";
import { useMemo } from "react";
import useIsMobile from "../../../../hooks/useIsMobile";

const CardCarousel = () => {
  const isMobile = useIsMobile();
  const {
    cards,
    currentCardIndex,
    setCurrentCardIndex,
    toggleCardNumberVisibility,
  } = useCardStore();

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
    trackMouse: true,
  });

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };
  const currentCard = useMemo(() => {
    return cards[currentCardIndex];
  }, [currentCardIndex, cards]);

  const handleShowCardNumber = () => {
    if (currentCard.isFrozen) {
      toast.error("Card is frozen", {
        position: "top-right",
        autoClose: 1500,
      });
      return;
    }
    if (currentCard) {
      toggleCardNumberVisibility(currentCard.id);
    }
  };

  return (
    <>
      {!isMobile && (
        <div
          className="w-full flex justify-end items-center mt-0 cursor-pointer text-green-500 font-medium"
          onClick={handleShowCardNumber}
        >
          <Eye className="h-6 w-6 mr-2" />
          <span>
            {currentCard.showCardNumber ? "Hide" : "Show"} card number
          </span>
        </div>
      )}
      <div className="relative w-full md:my-12 md:mt-8">
        <div className="relative" {...handlers}>
          <div className="overflow-hidden w-full">
            <div
              className="transition-transform duration-300 ease-in-out"
              style={{
                display: "flex",
                transform: `translateX(-${currentCardIndex * 100}%)`,
              }}
            >
              {cards.map((card) => (
                <div key={card.id} className="w-full flex-shrink-0">
                  <CardDisplay card={card} currentCard={currentCard} handleShowCardNumber={handleShowCardNumber}/>
                </div>
              ))}
            </div>
          </div>

          {cards.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentCardIndex
                      ? "w-4 bg-green-400"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}

          {!isMobile && cards.length > 1 && (
            <>
              <button
                onClick={prevCard}
                disabled={currentCardIndex === 0}
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full px-[16px] py-[10px] shadow-md ${
                  currentCardIndex === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-800"
                }`}
              >
                &larr;
              </button>

              <button
                onClick={nextCard}
                disabled={currentCardIndex === cards.length - 1}
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full px-[16px] py-[10px] shadow-md ${
                  currentCardIndex === cards.length - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-800"
                }`}
              >
                &rarr;
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
