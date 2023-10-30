import React, {PropsWithChildren} from "react";
import contextFactory from "../../../../utils/contextFactory/contextFactory.util";
import getCustomButtonStyles from "./customButton.styles";
import {CustomButtonPattern} from "./customButton.types";

type CustomButtonStyles = {
  styles: ReturnType<typeof getCustomButtonStyles>;
  pattern: CustomButtonPattern;
};

const [useCustomButtonStyles, CustomButtonStyles] = contextFactory<CustomButtonStyles>(`CustomButtonStyles`);

export { useCustomButtonStyles };

interface Props {
  styles: ReturnType<typeof getCustomButtonStyles>;
  pattern: CustomButtonPattern;
}

const CustomButtonStylesProvider: React.FC<PropsWithChildren<Props>> = ({ children, styles, pattern }) => {
  return (
    <CustomButtonStyles.Provider value={{ styles, pattern }}>
      {children}
    </CustomButtonStyles.Provider>
  );
}

export default CustomButtonStylesProvider;
