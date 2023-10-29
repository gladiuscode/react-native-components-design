import {createContext, useContext} from "react";

const contextFactory = <T>(name: string) => {
  const Context = createContext<T | null>(null);

  const useCtx = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error(`Missing ${name} provider. Are you sure you've wrapped this component with it?`);
    }

    return context;
  }

  return [useCtx, Context] as const;
}

export default contextFactory;
