import React, {memo} from "react";
import {ImageBackground, View} from "react-native";
import {useCardStyles} from "../productCard.context";
import {FontAwesome5} from "@expo/vector-icons";

interface Props {
  uri: string;
}

const ProductCardImage = memo<Props>(({ uri }) => {
  const styles = useCardStyles();

  console.log('render image');

  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.image} source={{ uri }}>
        <FontAwesome5 style={styles.imageHeart} name={'heart'} size={24} color={'white'} />
      </ImageBackground>
    </View>
  );
});

export default ProductCardImage;
