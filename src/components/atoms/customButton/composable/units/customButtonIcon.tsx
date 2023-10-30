import React, {memo} from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {useCustomButtonStyles} from "../customButton.context";
import {StyleProp, ViewStyle} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  size?: number;
}

const CustomButtonIcon = memo<Props>(({ style, name, size = 24 }) => {
  const { styles, pattern } = useCustomButtonStyles();

  return (
    <FontAwesome5 style={[style, styles[`icon${pattern}`]]} size={size} name={name} />
  );
});

export default CustomButtonIcon;
