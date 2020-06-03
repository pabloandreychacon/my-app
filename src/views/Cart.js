import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';

import Context from "../context/Context";
import MainNavigation from "../components/MainNavigation.js";

const Cart = props => {
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  const removeProduct = product => {
    context.globalValues.removeProductFromCart(product);
  };
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.globalValues.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.globalValues.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.globalValues.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button onClick={() => removeProduct(cartItem.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default Cart;
