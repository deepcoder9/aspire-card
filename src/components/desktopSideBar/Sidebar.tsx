import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Home,
  CreditCard,
  Wallet,
  Settings,
  AspireLogo,
  ProfileIcon,
} from "../../assets/icons";
import NavItem from "../mobileNavBar/NavItem";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "cards";
  const [active, setActive] = useState(
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
  );

  const iconMap = {
    Home: Home,
    Cards: CreditCard,
    Payments: Wallet,
    Credit: Settings,
    Settings: ProfileIcon,
  };

  return (
    <div className="hiddenflex flex-col h-full bg-[#0B2B4B] w-64 fixed left-0 top-0 bottom-0">
      <div className="p-6">
        <div className="flex font-semibold text-2xl text-[#00D54B] items-center gap-2">
          <AspireLogo className="w-12 h-12" />
          <div>aspire</div>
        </div>
        <div className="text-[#6b7280] text-sm mt-2">
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
              icon={
                <Icon
                  className="w-6 h-6"
                  color={active === item ? "#00D54B" : "white"}
                />
              }
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
