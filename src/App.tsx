import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootLayout";
import CardPageController from "./modules/cardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Some error occured!!!</div>,
    children: [
      {
        path: "/",
        element: <CardPageController />,
      },
      {
        path: "/home",
        element: <div>Home Page</div>,
      },
      {
        path: "/cards",
        element: <CardPageController />,
      },
      {
        path: "/payments",
        element: <div>Payments Page</div>,
      },
      {
        path: "/credit",
        element: <div>Credit Page</div>,
      },
      {
        path: "/settings",
        element: <div>Settings Page</div>,
      },
      {
        path: "*",
        element: <div>404 not found</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
