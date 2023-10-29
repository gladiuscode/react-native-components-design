import {StyleSheet} from "react-native";

const getProductCardStyles = () => {
  return StyleSheet.create({
    imageContainer: {
      height: 160,
      marginBottom: 12,
    },
    image: {
      flex: 1,
      padding: 14,
    },
    imageHeart: {
      alignSelf: 'flex-end',
    },
    bodyHorizontal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    bodyVertical: {
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    bodyTopHorizontalContainer: {

    },
    bodyTopVerticalContainer: {
      marginBottom: 2,
    },
    bodyTitle: {
      marginBottom: 2,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footerIcon: {
      marginRight: 10,
    }
  });
}

export default getProductCardStyles;
