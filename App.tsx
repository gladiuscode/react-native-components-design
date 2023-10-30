import React, {useEffect, useMemo, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import ThemeProvider from "./src/providers/theme/theme.context";
import ComposableProductCard from "./src/components/atoms/productCard/composable";
import ConfiguredProductCard from "./src/components/atoms/productCard/configured/productCard.atom";
import {ProductCardPattern} from "./src/components/atoms/productCard/configured/productCard.types";
import ConfiguredCustomButton, {CustomButtonPattern} from "./src/components/atoms/customButton/configured/customButton.atom";
import CustomButton from "./src/components/atoms/customButton/composable";

interface IProduct {
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
}

const products: IProduct[] = [
  {
    title: 'Nike',
    description: 'Scarpa',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    location: 'Catania',
  },
  {
    title: 'Nike',
    description: 'Scarpa',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    location: 'Catania',
  },
  {
    title: 'Nike',
    description: 'Scarpa',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    location: 'Catania',
  },
  {
    title: 'Nike',
    description: 'Scarpa',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    location: 'Catania',
  },
  {
    title: 'Nike',
    description: 'Scarpa',
    price: '300€',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D',
    location: 'Catania',
  },
];

const HorizontalScrollableProducts = () => {
  const { width } = useWindowDimensions();

  const horizontalCardWidth = width * 0.7;

  const cards = useMemo(() => {
    return products.map((product, index) => (
      <ComposableProductCard.Container
        key={index}
        style={{ width: horizontalCardWidth, marginLeft: 20, marginRight: index === products.length - 1 ? 20 : 0 }}
      >
        <ComposableProductCard.Image
          uri={product.image}
        />
        <ComposableProductCard.Body
          title={product.title}
          description={product.description}
          price={product.price}
        />
        <ComposableProductCard.Footer
          location={product.location}
        />
      </ComposableProductCard.Container>
    ));
  }, []);

  return (
    <ScrollView style={{ marginBottom: 32 }} horizontal showsHorizontalScrollIndicator={false}>
      {cards}
    </ScrollView>
  );
}

const VerticalScrollableProducts = () => {

  const productsRows = useMemo(() => products.reduce((rows, product, index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      return [...rows, [product]];
    }
    const lastRowIndex = rows.length - 1;
    const otherRows = rows.slice(0, lastRowIndex);
    return [...otherRows, [...rows[lastRowIndex], product]];
  }, [] as Array<IProduct[]>), []);

  const cards = useMemo(() => {
    return productsRows.map((row, index) => (
      <View key={index} style={{ flexDirection: 'row', marginHorizontal: 20, marginBottom: 20 }}>
        {row.map((product, index) => (
          <ConfiguredProductCard
            key={index}
            style={{ flex: 1, marginRight: row.length > 1 && !index ? 20 : 0 }}
            imageURI={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            location={product.location}
            pattern={ProductCardPattern.vertical}
          />
        ))}
      </View>
    ))
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {cards}
    </ScrollView>
  );
}

export default function App() {
  const [, setRender] = useState(false);

  useEffect(() => {
    setTimeout(args => {
      setRender(true);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ThemeProvider>
        <View>
          <HorizontalScrollableProducts />
        </View>
        <VerticalScrollableProducts />
        <View style={styles.footer}>
          <ConfiguredCustomButton
            text={'Submit'}
            // disabled
            icon={'thumbs-up'}
            // iconPosition={CustomButtonIconPosition.right}
            // pattern={CustomButtonPattern.outlined}
            onPress={console.log}
          />
          <CustomButton.Container
            style={styles.cancelButton}
            // disabled
            // pattern={CustomButtonPattern.outlined}
            onPress={console.log}
          >
            <CustomButton.Icon name={'thumbs-up'} />
            <CustomButton.Text>Submit</CustomButton.Text>
          </CustomButton.Container>
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  cancelButton: {
    marginTop: 12,
  },
});
