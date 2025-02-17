import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/home/home.jsx";
import LoginSignup from "./components/login/login.jsx";
import ScrapbookDash from "./components/Dashboard/scrapbook.jsx";
import ScrapbookCanvas from "./components/Canvas/Canvas.jsx";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/login", element: <LoginSignup /> },
      { path: "/Dashboard", element: <ScrapbookDash /> },
      { path: "/Canvas", element: <ScrapbookCanvas /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
