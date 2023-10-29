import {Text, View} from "react-native";
import React, {memo, PropsWithChildren} from "react";
import {useCardStyles} from "../productCard.context";
import {ProductCardPattern} from "../productCard.types";

interface Props {
  title: string;
  description: string;
  price: string;
  pattern?: ProductCardPattern;
}

const ProductCardBody = memo<PropsWithChildren<Props>>(({ title, description, price, pattern = ProductCardPattern.horizontal }) => {
  const styles = useCardStyles();

  console.log('render body');

  return (
    <View style={styles[`body${pattern}`]}>
      <View style={styles[`bodyTop${pattern}Container`]}>
        <Text style={styles.bodyTitle}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View>
        <Text>{price}</Text>
      </View>
    </View>
  );
});

export default ProductCardBody;
