import { useContext } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

import "./product.css";

const Product = ({ title, productItem, addToCart }) => {
  const { setSelectedProduct } = useContext(DataContainer);
  const router = useNavigate();

  const handleClick = () => {
    setSelectedProduct(productItem);
    localStorage.setItem(`selectedProduct-${productItem.id}`, JSON.stringify(productItem));
    router(`/shop/${productItem.id}`);
  };

  const handleAdd = (productItem) => {
    addToCart(productItem);
    toast.success("Product has been added to cart!");
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? <span className="discount">{productItem.discount}% Off</span> : null}
      <div className="product-container" onClick={handleClick}>
        <img loading="lazy" src={productItem.imgUrl} alt="" />
        <div className="product-details">
          <h3>{productItem.productName}</h3>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <h4>${productItem.price}</h4>
            <button aria-label="Add" type="submit" className="add" onClick={() => handleAdd(productItem)}>
              <ion-icon name="add"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
