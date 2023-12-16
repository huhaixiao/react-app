import React, { StrictMode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../../hooks/theme";
import {
  ThemeProps,
  createGlobalStyle,
} from "@/lib";

const GlobalStyle = createGlobalStyle`
  html:root {
    color-scheme: dark;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(
      props: ThemeProps<{ bg: string }>
    ) => props.theme.bg};
  }
`;

const Loading = () => {
  return <span>loading...</span>;
};

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <StrictMode>
        <Suspense fallback={<Loading />}>
          <ThemeContextProvider>
            <Outlet />
          </ThemeContextProvider>
        </Suspense>
      </StrictMode>
    </>
  ); 
};
