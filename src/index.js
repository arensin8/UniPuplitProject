import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter,createBrowserRouter,RouterProvider } from "react-router-dom";
import NewsPages from "./pages/News/NewsPages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path:"/news",
        element: <NewsPages />
    },
    {
        path:"/roadmap",
        element: ''
    },
    {
        path:"/about-us",
        element: ''
    },
    {
        path:"/getInTouch",
        element: ''
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);


