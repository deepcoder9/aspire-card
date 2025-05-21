import { useCallback, useMemo } from "react";
import { useCardStore } from "../../../../store/cardStore";
import ActionButton from "./CardActionButton";
import useIsMobile from "../../../../hooks/useIsMobile";

import FreezeIcon from "@/assets/svgs/freeze_card.svg";
import SpendLimitIcon from "@/assets/svgs/set_spend_limit.svg";
import GPay from "@/assets/svgs/gpay.svg";
import ReplaceCardIcon from "@/assets/svgs/replace_card.svg";
import CancelCardIcon from "@/assets/svgs/deactivate_card.svg";

const CardActions = () => {
  const isMobile = useIsMobile();
  const { getCurrentCard, freezeCard } = useCardStore();
  const currentCard = getCurrentCard();

  const handleFreezeCard = useCallback(() => {
    if (currentCard) {
      freezeCard(currentCard.id);
    }
  }, [currentCard, freezeCard]);

  const actionLabel = [
    {
      label: "Freeze card",
      onClick: handleFreezeCard,
      icon: <img src={FreezeIcon} alt="Freeze Icon" className="w-8 h-8" />,
    },
    {
      label: "Set spend limit",
      icon: (
        <img src={SpendLimitIcon} alt="Spend Limit Icon" className="w-8 h-8" />
      ),
    },
    {
      label: "Add to GPay",
      icon: <img src={GPay} alt="GPay Icon" className="w-8 h-8" />,
    },
    {
      label: "Replace card",
      icon: (
        <img
          src={ReplaceCardIcon}
          alt="Replace Card Icon"
          className="w-8 h-8"
        />
      ),
    },
    {
      label: "Cancel card",
      icon: (
        <img src={CancelCardIcon} alt="Cancel Card Icon" className="w-8 h-8" />
      ),
    },
  ];

  const actions = useMemo(() => {
    return actionLabel.map((action, index) => {
      return (
        <ActionButton
          key={index}
          icon={action.icon}
          label={action.label}
          onClick={action.onClick || (() => {})}
        />
      );
    });
  }, [actionLabel]);

  return (
    <div
      style={isMobile ? { borderRadius: "20px 20px 0 0" } : {}}
      className="w-full md:mt-4 bg-[#EDF3FF] p-4 rounded-t-xl md:rounded-xl"
    >
      <div className="grid grid-cols-5 gap-1">{actions}</div>
    </div>
  );
};

export default CardActions;
