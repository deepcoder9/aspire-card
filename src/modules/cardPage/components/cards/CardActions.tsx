import { useCallback, useMemo } from "react";
import { useCardStore } from "../../../../store/cardStore";
import {
  FreezeIcon,
  SpendLimitIcon,
  GPay,
  ReplaceCardIcon,
  CancelCardIcon,
} from "../../../../assets/icons";
import ActionButton from "./CardActionButton";
import useIsMobile from "../../../../hooks/useIsMobile";

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
      icon: <FreezeIcon className="w-10 h-10" />,
    },
    {
      label: "Set spend limit",
      icon: <SpendLimitIcon className="w-10 h-10" />,
    },
    {
      label: "Add to GPay",
      icon: <GPay className="w-10 h-10" />,
    },
    {
      label: "Replace card",
      icon: <ReplaceCardIcon className="w-10 h-10" />,
    },
    {
      label: "Cancel card",
      icon: <CancelCardIcon className="w-10 h-10" />,
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
      className="w-full md:mt-4 bg-gray-200 p-4 rounded-t-xl md:rounded-xl"
    >
      <div className="grid grid-cols-5 gap-1">{actions}</div>
    </div>
  );
};

export default CardActions;
