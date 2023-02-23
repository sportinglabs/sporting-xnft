import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "tw-elements";
//routes
import { Layout } from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Stake from "./pages/Stake";

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
    children: [{ index: false, element: <Stake /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
