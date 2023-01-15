import React, { useState } from "react";
import { CartState } from "../../Context/CartContext";
import "./Products.css";
function Products({ product }) {
  const [count, setCount] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <div className="product__image">
              <img src={product.imageURL} alt="product" />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>{product.name}</h3>
            <h3>Rs{product.price}</h3>

            <p>{product.type}</p>
            <div className="wrapper">
              {toggleBtn ? (
                <div className="hidden__btn">
                  <button
                    onClick={() => {
                      if (count === 1) {
                        setCount(count - 1);
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        });
                        setToggleBtn(false);
                        return;
                      }
                      setCount(count - 1);
                    }}
                    className="minus__btn">
                    -
                  </button>

                  <span className="count">{count}</span>
                  <button
                    onClick={() => {
                      if (count === product.quantity) {
                        alert("Reached max quantity");
                      } else {
                        setCount(count + 1);
                      }
                    }}
                    className="plus__btn">
                    +
                  </button>
                </div>
              ) : (
                <div className="btn_wrapper">
                  <button
                    type="button"
                    title="Add"
                    className="button btn-cart"
                    onClick={() => {
                      if (cart.some((x) => x.id === product.id)) {
                        alert("Product is already in the cart");
                      } else {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        });
                        setCount(count + 1);
                        setToggleBtn(true);
                      }
                    }}>
                    <span>
                      <i className="fa fa-shopping-cart"></i>
                      <i className="fa fa-arrow-down"></i>
                      <span>Add to cart</span>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
