import React, { createContext, useContext, useState } from "react";
import { noop } from "lodash";
import { ThemeProvider } from "@/lib";
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

export const StoreContextProvider = ({
  children,
}: StoreContextProviderProps) => {
  const [appearance, setAppearance] = useState<Appearance>(Appearance.Dark);
  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance }}>
      <ThemeProvider theme={appearance === Appearance.Dark ? dark : light}>
          {children}
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
