import { useCardStore } from "../../store/cardStore";
import { TabType } from "../../types";

const TabBar = () => {
  const { activeTab, setActiveTab } = useCardStore();

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex md:border-b md:border-gray-200 px-6 md:px-0 bg-[#0B2B4B] md:bg-transparent">
      {[
        {
          label: "My debit cards",
          value: "my",
        },
        {
          label: "All company cards",
          value: "all",
        },
      ].map((tab) => (
        <div
          key={tab.value}
          className={`cursor-pointer py-4 px-2 mr-6 relative text-white md:text-black ${
            activeTab === tab.value
              ? "text-blue-800 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => handleTabClick(tab.value as TabType)}
        >
          {tab.label}
          {activeTab === tab.value && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3b82f6] md:bg-blue-800"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
