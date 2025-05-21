import { useState } from "react";
import NavItem from "./NavItem";

import LogoMobile from "../../assets/svgs/logo_mob.svg";
import CardMobile from "../../assets/svgs/card_mob.svg";
import PaymentsMobile from "../../assets/svgs/payment_mob.svg";
import CreditMobile from "../../assets/svgs/credit_mob.svg";
import AccountMobile from "../../assets/svgs/account_mob.svg";

const MobileNavbar = () => {
  const [active, setActive] = useState("Cards");

  const iconMap = {
    Home: <img src={LogoMobile} alt="Home Icon" />,
    Cards: <img src={CardMobile} alt="Card Icon" />,
    Payments: <img src={PaymentsMobile} alt="Wallet Icon" />,
    Credit: <img src={CreditMobile} alt="Settings Icon" />,
    Settings: <img src={AccountMobile} alt="Profile Icon" />,
  };

  return (
    <div
      style={{ zIndex: 999999999999999 }}
      className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] border-t border-gray-200 py-1 px-4"
    >
      <div className="flex justify-between items-center">
        {["Home", "Cards", "Payments", "Credit", "Settings"].map((item) => {
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

export default MobileNavbar;
