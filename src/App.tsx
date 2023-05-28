import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routes
import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Garage from "./pages/garage/Garage";
import GarageEquipView from "./pages/garage/GarageEquipView";
import GarageSingleView from "./pages/garage/GarageSingleView";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Race from "./pages/race/Race";

declare global {
  interface Window {
    xnft: any;
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/garage",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Garage /> }],
  },
  {
    path: "/garage/item",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <GarageSingleView /> }],
  },
  {
    path: "/garage/item/equip",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <GarageEquipView /> }],
  },
  {
    path: "/leaderboard",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Leaderboard /> }],
  },
  {
    path: "/race",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Race /> }],
  },
]);

function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ConnectionProvider>
  );
}

export default App;
