import { useState } from "react";
import { ProfileIcon } from "../../assets/icons";
import { Home, CreditCard, Wallet, Settings } from "../../assets/icons";
import NavItem from "./NavItem";

const MobileNavbar = () => {
  const [active, setActive] = useState("Home");

  const iconMap = {
    Home: Home,
    Cards: CreditCard,
    Payments: Wallet,
    Credit: Settings,
    Settings: ProfileIcon,
  };

  return (
    <div
      style={{ zIndex: 999999999999999 }}
      className="fixed bottom-0 left-0 right-0 bg-[#0B2B4B] border-t border-gray-200 py-3 px-4"
    >
      <div className="flex justify-between items-center">
        {["Home", "Cards", "Payments", "Credit", "Settings"].map((item) => {
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

export default MobileNavbar;