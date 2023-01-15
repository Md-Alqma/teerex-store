import Products from "../Products/Products";
import "./ProductList.css";
function ProductList({ productsData }) {
  return (
    <div className="cards__container">
      {productsData?.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
