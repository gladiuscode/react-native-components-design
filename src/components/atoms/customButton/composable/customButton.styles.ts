import {StyleSheet} from "react-native";

const getCustomButtonStyles = () => {
  return StyleSheet.create({
    container: {
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      paddingHorizontal: 12,
    },
    containerOutlined: {
      borderWidth: 1,
      borderColor: 'green',
    },
    containerSolid: {
      backgroundColor: 'green',
    },
    text: {
      fontSize: 24,
      textAlign: 'center',
      marginHorizontal: 12,
    },
    textOutlined: {
      color: 'green',
    },
    textSolid: {
      color: 'white',
    },
    iconLeft: {
      marginRight: 12,
    },
    iconRight: {
      marginLeft: 12,
    },
    iconOutlined: {
      color: 'green',
    },
    iconSolid: {
      color: 'white',
    },
  });
}

export default getCustomButtonStyles;
