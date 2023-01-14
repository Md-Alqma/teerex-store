import React, { useEffect, useState } from "react";
import { CartState } from "../../Context/CartContext";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div>
      {cart?.map((item) => (
        <div key={item.id} className="cart__card">
          <div className="left__side">
            <img src={item.imageURL} width="80px" height="60px" alt="product" />
            <h4>{item.name}</h4>
          </div>
          <div className="right__side">
            <h4>{item.price}</h4>
            <select
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: item.id,
                    qty: e.target.value,
                  },
                });
              }}>
              {[...Array(item.quantity).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
              ))}
            </select>
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}>
              X
            </button>
          </div>
        </div>
      ))}
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: Rs{total}</span>
        <button disabled={cart.length === 0}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
