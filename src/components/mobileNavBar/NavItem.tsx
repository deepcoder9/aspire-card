import { useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active = false, onClick }: NavItemProps) => {
  const navigate = useNavigate();

  const handleNavBarClick = () => {
    navigate(`/${label.toLowerCase()}`);
    if (onClick) {
      onClick();
    }
  };

  const acitveColor = active ? "text-white" : "text-blue-300";
  const textColor = active ? "#00D54B" : "white";

  return (
    <div
      className={`flex flex-col md:gap-2 md:flex-row cursor-pointer justify-center md:justify-start items-center py-4 px-6 ${acitveColor}`}
      onClick={handleNavBarClick}
    >
      <div className="mb-1 md:mb-0">{icon}</div>
      <span className="text-xs md:text-base" style={{ color: textColor }}>
        {label}
      </span>
    </div>
  );
};

export default NavItem;
