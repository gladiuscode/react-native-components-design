import React, {memo, PropsWithChildren} from "react";
import {Text, View} from "react-native";
import {useCardStyles} from "../productCard.context";
import {FontAwesome5} from "@expo/vector-icons";

interface Props {
  location: string;
}

const ProductCardFooter = memo<PropsWithChildren<Props>>(({ location }) => {
  const styles = useCardStyles();

  console.log('render footer');

  return (
    <View style={styles.footer}>
      <FontAwesome5 style={styles.footerIcon} name="location-arrow" color="grey"/>
      <Text>{location}</Text>
    </View>
  );
});

export default ProductCardFooter;
