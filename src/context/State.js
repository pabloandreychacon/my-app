import React, { useReducer } from "react";

import Context from "./Context";
import Reducer, { Constants } from "./Reducer";

const State = (props) => {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(Reducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: Constants.ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: Constants.REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  const globalValues = {
    products: products,
    cart: cartState.cart,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
  };

  return (
    <Context.Provider value={{ globalValues }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
