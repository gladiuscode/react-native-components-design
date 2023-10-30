import {memo, PropsWithChildren} from "react";
import CustomButtonStylesProvider from "../customButton.context";
import {CustomButtonPattern} from "../customButton.types";
import {StyleProp, TouchableOpacity, View, ViewStyle} from "react-native";
import getCustomButtonStyles from "../customButton.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  pattern?: CustomButtonPattern;
  disabled?: boolean;
  onPress: () => void;
}

const CustomButtonContainer = memo<PropsWithChildren<Props>>(({
  style,
  pattern = CustomButtonPattern.solid,
  disabled,
  children,
  onPress,
}) => {
  const styles = getCustomButtonStyles();

  return (
    <CustomButtonStylesProvider styles={styles} pattern={pattern}>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <View style={[style, styles.container, styles[`container${pattern}`]]}>
          {children}
        </View>
      </TouchableOpacity>
    </CustomButtonStylesProvider>
  );
});

export default CustomButtonContainer;
