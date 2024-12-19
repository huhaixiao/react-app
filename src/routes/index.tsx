// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home/";
import { Editor } from "./editor";
import { StoreContextProvider } from "@/stores";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "editor",
          element: <Editor />,
        },
      ],
    },
  ]);

  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
};
