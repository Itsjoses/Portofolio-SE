import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ThemeProvider from "./context/ThemeContext.tsx";
import Project from "./pages/Project.tsx";
import Certificate from "./pages/Certificate.tsx";
import DetailProject from "./pages/DetailProject.tsx";
import Meteor from "./components/misc/Meteor.tsx";
import Pet from "./components/layouts/Pet.tsx";

// seluruh routing ditaruh pada router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/certificate",
    element: <Certificate />,
  },
  {
    path: "/project/:name",
    element: <DetailProject />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Meteor />
      <Pet />
    </ThemeProvider>
  </React.StrictMode>
);
