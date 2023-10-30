import React, {memo, PropsWithChildren} from "react";
import {Text} from "react-native";
import {useCustomButtonStyles} from "../customButton.context";

interface Props {}

const CustomButtonText = memo<PropsWithChildren<Props>>(({ children }) => {
  const { styles, pattern } = useCustomButtonStyles();

  return (
    <Text style={[styles.text, styles[`text${pattern}`]]}>{children}</Text>
  );
});

export default CustomButtonText;
