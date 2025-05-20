import React from "react";
import Sidebar from "../desktopSideBar/Sidebar";
import Header from "../header/Header";
import TabBar from "../tabBar/TabBar";
import useIsMobile from "../../hooks/useIsMobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {isMobile && children}
      {!isMobile && (
        <>
          <Sidebar />
          <div className="flex-1 md:ml-64 flex flex-col">
            <Header />
            <div className="md:px-16">
              <TabBar />
            </div>
            <div className="flex-1 p-16">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
