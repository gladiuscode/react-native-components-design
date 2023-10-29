import {useColorScheme} from "react-native";
import contextFactory from "../../utils/contextFactory/contextFactory.util";
import React, {PropsWithChildren, useCallback, useMemo, useState} from "react";

export enum ThemeVariant {
  light,
  dark,
}

type OnChangeVariant = (newVariant: ThemeVariant) => void;

interface ThemeContext {
  variant: ThemeVariant;
  onChangeVariant: OnChangeVariant;
}

const [useTheme, ThemeContext] = contextFactory<ThemeContext>('ThemeContext');

export { useTheme };

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const deviceColorScheme = useColorScheme();
  const [variant, setVariant] = useState<ThemeVariant>(deviceColorScheme === 'dark' ? ThemeVariant.dark : ThemeVariant.light);

  const onChangeVariant = useCallback<OnChangeVariant>((newVariant: ThemeVariant) => setVariant(newVariant), []);

  const value = useMemo<ThemeContext>(() => ({
    variant,
    onChangeVariant,
  }), []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
