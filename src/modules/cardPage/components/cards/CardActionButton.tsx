interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ActionButton = ({ icon, label, onClick }: ActionButtonProps) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="mb-2">{icon}</div>
      <div className="text-center text-xs text-[#0C365A] break-words">
        {label}
      </div>
    </div>
  );
};

export default ActionButton;
