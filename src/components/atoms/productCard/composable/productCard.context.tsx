import getProductCardStyles from "./productCard.styles";
import React, {PropsWithChildren} from "react";
import contextFactory from "../../../../utils/contextFactory/contextFactory.util";

type ProductCardStyles = ReturnType<typeof getProductCardStyles>;

const [useCardStyles, ProductCardStylesContext] = contextFactory<ProductCardStyles>(`ProductCardStyles`);

export { useCardStyles };

const ProductCardStylesProvider: React.FC<PropsWithChildren<{ styles: ProductCardStyles }>> = ({ children, styles }) => {
  return (
    <ProductCardStylesContext.Provider value={styles}>
      {children}
    </ProductCardStylesContext.Provider>
  );
}

export default ProductCardStylesProvider;
