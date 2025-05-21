import { useState } from "react";
import { useLocation } from "react-router-dom";
import AspireLogoGreen from "./../../assets/svgs/aspire_logo_green.svg";
import NavItem from "../mobileNavBar/NavItem";
import HomeIcon from "@/assets/svgs/home.svg";
import CardIcon from "@/assets/svgs/card.svg";
import PaymentsIcon from "@/assets/svgs/payments.svg";
import CreditIcon from "@/assets/svgs/credit.svg";
import AccountIcon from "@/assets/svgs/account.svg";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "cards";
  const [active, setActive] = useState(
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
  );

  const iconMap = {
    Home: <img src={HomeIcon} alt="Home Icon" />,
    Cards: <img src={CardIcon} alt="Card Icon" />,
    Payments: <img src={PaymentsIcon} alt="Wallet Icon" />,
    Credit: <img src={CreditIcon} alt="Settings Icon" />,
    Settings: <img src={AccountIcon} alt="Profile Icon" />,
  };

  return (
    <div className="hiddenflex flex-col h-full bg-[#0B2B4B] w-64 fixed left-0 top-0 bottom-0">
      <div className="p-6">
        <div className="flex font-semibold text-2xl text-[#00D54B] items-center gap-2">
          <img src={AspireLogoGreen} alt="Aspire Logo" />
        </div>
        <div className="text-[#FFFFFF] opacity-30 text-sm mt-2">
          <p>
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </p>
        </div>
      </div>

      <div className="mt-6 flex-1">
        {["Home", "Cards", "Payments", "Credit", "Settings"]?.map((item) => {
          const Icon = iconMap[item as keyof typeof iconMap];
          return (
            <NavItem
              key={item}
              icon={Icon}
              label={item}
              active={active === item}
              onClick={() => setActive(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
