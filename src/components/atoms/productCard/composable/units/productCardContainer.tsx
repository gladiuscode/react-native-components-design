import React, {memo, PropsWithChildren} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import ProductCardStylesProvider from "../productCard.context";
import getProductCardStyles from "../productCard.styles";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ProductCardContainer = memo<PropsWithChildren<Props>>(({
  style,
  children,
}) => {
  const styles = getProductCardStyles();

  console.log('render container')

  return (
    <ProductCardStylesProvider styles={styles}>
      <View style={style}>
        {children}
      </View>
    </ProductCardStylesProvider>
  );
});

export default ProductCardContainer;
