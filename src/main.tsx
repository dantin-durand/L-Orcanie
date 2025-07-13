import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MenuPage from "./features/menu/menu.page";

import { createBrowserRouter, RouterProvider } from "react-router";
import DefaultLayout from "./components/layouts/default-layout";
import OrdersPage from "./features/orders/orders.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <MenuPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/orders",
    element: (
      <DefaultLayout>
        <OrdersPage />
      </DefaultLayout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#fce1b6] px-[5%] py-10 min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
