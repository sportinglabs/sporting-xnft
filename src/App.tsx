import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routes
import { Layout } from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Stake from "./pages/Stake";
import Leaderboard from "./pages/Leaderboard";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import Mint from "./pages/Mint";
import { ToastContainer } from "react-toastify";

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
    path: "/stake",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Stake /> }],
  },
  {
    path: "/leaderboard",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Leaderboard /> }],
  },
  {
    path: "/purchase",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Mint /> }],
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
