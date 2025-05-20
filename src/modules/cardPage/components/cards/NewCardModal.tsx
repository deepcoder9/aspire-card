import { useState } from "react";
import { useCardStore } from "../../../../store/cardStore";

const AddNewCardModal = () => {
  const { isNewCardModalOpen, toggleNewCardModal, addCard } = useCardStore();
  const [cardName, setCardName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!cardName.trim()) {
      setError("Card name cannot be empty");
      return;
    }
    addCard(cardName);
    setCardName("");
    setError("");
  };

  if (!isNewCardModalOpen) {
    return null;
  }

  return (
    <div
      style={{ zIndex: 999999999999999 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Create New Card</h2>
          <button
            onClick={toggleNewCardModal}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label
              htmlFor="cardName"
              className="block text-gray-700 font-medium mb-2"
            >
              Card Name
            </label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
                setError("");
              }}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="Enter card name"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleNewCardModal}
              className="px-4 py-2 text-gray-600 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Create Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCardModal;
