import { useContext, useEffect } from "react";
import { DataContainer } from "../App";
import { Col, Container, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct } = useContext(
    DataContainer
  );
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const gst = totalPrice * 0.05;
  const totalPriceWithGst = totalPrice + gst;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  const handleDeleteProduct = (item) => {
    deleteProduct(item);
    toast.success("Item removed from the cart!");
  };

  const handleCheckout = () => {
    // Handle the checkout logic here
    toast.success("Checkout Successful!");
    navigate("/checkout");
  };

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are added to the Cart</h1>
            )}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;
              const quantityText = item.qty === 1 ? "day" : "days";
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <Button variant="primary" className="incCart" onClick={() => addToCart(item)}>
                            <i className="fa-solid fa-plus"></i>
                          </Button>
                          <Button variant="primary" className="desCart" onClick={() => decreaseQty(item)}>
                            <i className="fa-solid fa-minus"></i>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Button
                      variant="danger"
                      className="delete"
                      onClick={() => handleDeleteProduct(item)}
                    >
                      <ion-icon name="close"></ion-icon>
                    </Button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h4>Items:</h4>
                    <h4>GST (5%):</h4>
                    <h4>Order Total:</h4>
                  </div>
                  <div className="text-end">
                    <h4>${totalPrice.toFixed(2)}</h4>
                    <h4>${gst.toFixed(2)}</h4>
                    <h3>${totalPriceWithGst.toFixed(2)}</h3>
                  </div>
                </div>
              </div>
              <Button variant="success" className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
