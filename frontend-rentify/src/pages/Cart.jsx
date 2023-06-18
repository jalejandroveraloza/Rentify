import { useContext, useEffect } from "react";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Cart = () => {
  const { CartItem, setCartItem, decreaseQty, deleteProduct } = useContext(
    DataContainer
  );
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const gst = totalPrice * 0.05;
  const totalPriceWithGst = totalPrice + gst;

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
                        <Col xs={12} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty} {quantityText} = ${productQty}.00
                          </h4>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => handleDeleteProduct(item)}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
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
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
