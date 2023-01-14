import React from "react";
import "./Products.css";
function Products({ product }) {
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
          </div>
          <div class="cont">
            <div class="crtdiv">
              <span class="qty">
                <span class="dec">
                  <i class="fa fa-minus-square" aria-hidden="true"></i>
                </span>
                <span class="num">1</span>
                <span class="inc">
                  <i class="fa fa-plus-square" aria-hidden="true"></i>
                </span>
              </span>
              <button id="btn" type="button" class="cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to
                cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
