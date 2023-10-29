import React from "react";
import {ImageBackground, StyleProp, Text, View, ViewStyle} from "react-native";
import getProductCardStyles from "./productCard.styles";
import {ProductCardPattern} from "./productCard.types";
import {FontAwesome5} from "@expo/vector-icons";

interface Props {
  style: StyleProp<ViewStyle>;
  imageURI: string;
  title: string;
  description: string;
  price: string;
  location: string;
  pattern: ProductCardPattern;
}

const ProductCard: React.FC<Props> = ({
  style,
  imageURI,
  title,
  description,
  price,
  location,
  pattern,
}) => {
  const styles = getProductCardStyles();

  return (
    <View style={style}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={{uri: imageURI}}>
          <FontAwesome5 style={styles.imageHeart} name={'heart'} size={24} color={'white'} />
        </ImageBackground>
      </View>
      <View style={styles[`body${pattern}`]}>
        <View style={styles[`bodyTop${pattern}Container`]}>
          <Text style={styles.bodyTitle}>{title}</Text>
          <Text>{description}</Text>
        </View>
        <View>
          <Text>{price}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <FontAwesome5 style={styles.footerIcon} name="location-arrow" color="grey"/>
        <Text>{location}</Text>
      </View>
    </View>
  );
}

export default ProductCard;
