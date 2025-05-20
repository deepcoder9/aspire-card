import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  // we can write auth logic here
  return (
    <div>
      <Outlet />
      <ToastContainer
        newestOnTop
        rtl={false}
        theme="dark"
        closeOnClick
        pauseOnHover
        hideProgressBar
        autoClose={2000}
        draggable={false}
        position="bottom-left"
        pauseOnFocusLoss={false}
      />
    </div>
  );
};

export default RootLayout;
