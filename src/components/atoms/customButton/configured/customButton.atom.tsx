import React from "react";
import {Pressable, View, Text, StyleProp, ViewStyle, TouchableOpacity} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import getCustomButtonStyles from "./customButton.styles";

export enum CustomButtonIconPosition {
  left = 'Left',
  right = 'Right'
}

export enum CustomButtonPattern {
  outlined = 'Outlined',
  solid = 'Solid',
}

interface Props {
  style?: StyleProp<ViewStyle>;
  text: string;
  icon?: string;
  iconPosition?: CustomButtonIconPosition;
  disabled?: boolean;
  pattern?: CustomButtonPattern;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({
  style,
  text,
  icon,
  iconPosition = CustomButtonIconPosition.left,
  pattern = CustomButtonPattern.solid,
  disabled = false,
  onPress,
}) => {
  const styles = getCustomButtonStyles();

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[style, styles.container, styles[`container${pattern}`]]}>
        {iconPosition === CustomButtonIconPosition.left && icon
          ? <FontAwesome5 style={[styles[`icon${iconPosition}`], styles[`icon${pattern}`]]} size={24} name={icon} />
          : null
        }
        <Text style={[styles.text, styles[`text${pattern}`]]}>{text}</Text>
        {iconPosition === CustomButtonIconPosition.right && icon
          ? <FontAwesome5 style={[styles[`icon${iconPosition}`], styles[`icon${pattern}`]]} size={24} name={icon} />
          : null
        }
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;
