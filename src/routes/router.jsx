import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Services } from "../pages/services/Services";
import { Project } from "../pages/project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

export default router;
