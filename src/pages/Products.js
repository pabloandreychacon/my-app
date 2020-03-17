import React, { useContext } from "react";

import Context from "../context/Context";
import MainNavigation from "../components/MainNavigation.js";

const Products = props => {
  const context = useContext(Context);
  const addProduct = product => {
    context.globalValues.addProductToCart(product);
  };
  return (
    <div className="products">
      <MainNavigation
        cartItemNumber={context.globalValues.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="products">
        <ul>
          {context.globalValues.products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={() => addProduct(product)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Products;
