import { AspireLogo, Eye, VisaLogo } from "../../../../assets/icons";
import { Card } from "../../../../types";
import { formatCardNumber, formatMaskedCardNumber } from "../../../../utils/helpers";
import useIsMobile from "../../../../hooks/useIsMobile";
interface CardDisplayProps {
  card: Card;
  handleShowCardNumber: () => void;
  currentCard: Card;
}

const CardDisplay = ({
  card,
  handleShowCardNumber,
  currentCard,
}: CardDisplayProps) => {
  const isMobile = useIsMobile();
  const displayedCardNumber = card.showCardNumber
    ? formatCardNumber(card.cardNumber)
    : formatMaskedCardNumber(card.cardNumber);

  const getCardOpacity = () => {
    if (card.isFrozen) {
      return "opacity-40";
    }
    return "opacity-100";
  };

  return (
    <div
      className={`mt-5 md:mt-0 w-full max-w-md mx-auto rounded-xl md:rounded-xl rounded-tr-none shadow-lg overflow-hidden ${getCardOpacity()} transition-opacity duration-300`}
    >
      {isMobile && (
        <div
          style={{ margin: "auto 0 auto auto" }}
          className="max-w-[200px] flex justify-end items-center mt-4 cursor-pointer text-green-500 font-medium bg-white rounded-bl-none rounded-lg rounded-br-none p-2"
          onClick={handleShowCardNumber}
        >
          <Eye className="h-6 w-6 mr-2" />
          <span>
            {currentCard.showCardNumber ? "Hide" : "Show"} card number
          </span>
        </div>
      )}
      <div className="relative bg-green-400 p-6 pt-8 text-white rounded-xl md:rounded-xl rounded-tr-none">
        <div className="w-full flex justify-end items-center">
          <AspireLogo className="w-8 h-8" />
          <div className="text-xl text-white">Aspire</div>
        </div>

        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-semibold">{card.name}</h2>
        </div>

        <div className="flex space-x-4 mb-8">
          <div className="flex flex-row space-x-6">
            {displayedCardNumber.split(" ").map((group, index) => (
              <div key={index} className="flex space-x-2">
                {group.split("").map((char, idx) => (
                  <div key={idx} className="text-xl font-semibold">
                    {char}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-14">
            <div className="text-sm font-semibold text-white">
              Thru: {card.expiryDate}
            </div>
            <div className="text-sm font-semibold text-white flex items-center">
              <div>CVV: &nbsp;</div>
              <div>{card.showCardNumber ? "456" : "* * *"}</div>
            </div>
          </div>
          <div className="h-8">
            <VisaLogo className="w-18 h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
