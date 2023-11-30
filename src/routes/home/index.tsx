import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../../hooks/theme";
import {
  GlobalStyleComponent,
  ThemeProps,
  createGlobalStyle,
} from "styled-components";
import { Link } from "../../components";
import { Editor } from "../../components/editor";

const GlobalStyle = createGlobalStyle`
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
  useLayoutEffect(() => {
    fetch("http://101.43.180.155:8888")
      .then<{ foo: string }>((response) => response.json())
      .then((result) => {
        console.log({ result });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  return (
    <>
      <GlobalStyle />
      <StrictMode>
        <Suspense fallback={<Loading />}>
          <ThemeContextProvider>
            <div>
              <Link href="/core/" target="_blank">
                one
              </Link>
              <Link to="/login">Login</Link>
            </div>
            <Outlet />
            <Editor />
          </ThemeContextProvider>
        </Suspense>
      </StrictMode>
    </>
  );
};
