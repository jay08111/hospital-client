import { createBrowserRouter, Navigate } from "react-router-dom";

import Root from "@/pages/Layout/Root";
import { Intro, Login } from "@/router/layloads";

export const router = createBrowserRouter([
  {
    path: "/client",
    element: <Root />,
    children: [
      {
        path: "intro",
        element: <Intro />,
        children: [],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/client/intro" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/client/intro" replace />,
  },
]);
