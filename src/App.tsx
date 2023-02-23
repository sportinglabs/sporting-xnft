import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import "tw-elements";
import { Home } from "./pages/HomePage";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
