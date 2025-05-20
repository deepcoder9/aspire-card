import { Card } from "../../../../types";

const CardDetails = ({ currentCard }: { currentCard: Card }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Card Name</p>
          <p className="font-medium">{currentCard.name}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Card Number</p>
          <p className="font-medium">
            {currentCard.showCardNumber
              ? currentCard.cardNumber
              : "•••• •••• •••• 1111"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Expiry Date</p>
          <p className="font-medium">{currentCard.expiryDate}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">CVV</p>
          <p className="font-medium">
            {currentCard.showCardNumber ? "456" : "* * *"}
          </p>
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-sm">Status</p>
        <p className="font-medium">
          {currentCard.isFrozen ? "Frozen" : "Active"}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
