import { useCardStore } from "../../store/cardStore";
import { PlusCircle } from "../../assets/icons";
import useIsMobile from "../../hooks/useIsMobile";

const Header = () => {
  const isMobile = useIsMobile();
  const { toggleNewCardModal } = useCardStore();

  return (
    <div className="flex justify-between items-center md:pl-16 md:pr-16 p-4 w-full bg-[#0B2B4B] md:bg-transparent">
      <div>
        <h1 className="text-gray-500 text-sm md:text-base">
          <span className="text-sm md:text-base text-white pb-2 md:text-black">
            {isMobile ? "Account balance" : "Available balance"}
          </span>
        </h1>
        <div className="flex items-center">
          <div className="bg-green-400 text-white px-2 py-1 rounded text-sm mr-2">
            $
          </div>
          <span className="text-3xl font-bold text-white md:text-black">
            3,000
          </span>
        </div>
      </div>

      <button
        onClick={toggleNewCardModal}
        className="flex items-center gap-2 md:bg-[#325BAF] text-blue-500 md:text-white px-4 py-2 rounded-lg hover:bg-[#1B2A41] transition-colors duration-200"
      >
        <PlusCircle
          className="w-6 h-6"
          color={isMobile ? "#3b82f6" : "white"}
        />
        <span>New card</span>
      </button>
    </div>
  );
};

export default Header;
