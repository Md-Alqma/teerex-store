import React, { useRef, useState } from "react";
import { CartState} from "../../Context/CartContext";
import "./Products.css";
function Products({ product }) {
  const [count, setCount] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(false);
  const addButton = useRef(null);
  const hiddenBtn = useRef(null);
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
                <div ref={hiddenBtn} className="hidden__btn">
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
                  <span className="count">{count}</span>
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
                </div>
              ) : (
                <div className="btn_wrapper">
                  <button
                    ref={addButton}
                    type="button"
                    title="Bestel"
                    className="button btn-cart"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                      setCount(count + 1);
                      setToggleBtn(true);
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
