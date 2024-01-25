import React, { createContext, useContext, useState } from "react";
import { noop } from "lodash";
import { ConfigProvider, ThemeProvider, theme, zhCN } from "@/lib";
import { dark, light } from "./utils";

interface StoreContextProviderProps {
  children?: React.ReactNode;
}

enum Appearance {
  Auto,
  Light,
  Dark,
}

const AppearanceContext = createContext({
  appearance: Appearance.Auto,
  setAppearance: noop,
});

// const LocalContext = createContext

export const StoreContextProvider = ({
  children,
}: StoreContextProviderProps) => {
  const [appearance, setAppearance] = useState<Appearance>(Appearance.Dark);
  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance }}>
      <ThemeProvider theme={appearance === Appearance.Dark ? dark : light}>
        <ConfigProvider
          locale={zhCN}
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              // Seed Token，影响范围大
              colorPrimary: "#00b96b",
              borderRadius: 2,

              // 派生变量，影响范围小
              colorBgContainer: "black",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </AppearanceContext.Provider>
  );
};

export const useStoreContext = () => {
  const appearanceContext = useContext(AppearanceContext);

  return {
    ...appearanceContext,
  };
};
