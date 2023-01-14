import React, { useRef, useState } from "react";
import "./Products.css";
function Products({ product }) {
  const [count, setCount] = useState(0);
  const addButton = useRef(null);
  const hiddenBtn = useRef(null);
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
              <div className="btn_wrapper">
                <button
                  ref={addButton}
                  type="button"
                  title="Bestel"
                  className="button btn-cart"
                  onClick={() => {
                    setCount(count + 1);
                    addButton.current.style.display = "none";
                    hiddenBtn.current.style.display = "block";
                  }}>
                  <span>
                    <i className="fa fa-shopping-cart"></i>
                    <i className="fa fa-arrow-down"></i>
                    <span>Add to cart</span>
                  </span>
                </button>
                <div ref={hiddenBtn} className="hidden__btn">
                  <button
                    onClick={() => {
                      if (count == product.quantity) {
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
                      if (count == 0) {
                        return;
                      }
                      if (count == 1) {
                        addButton.current.style.display = "block";
                        hiddenBtn.current.style.display = "none";
                      }
                      setCount(count - 1);
                    }}
                    className="minus__btn">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
