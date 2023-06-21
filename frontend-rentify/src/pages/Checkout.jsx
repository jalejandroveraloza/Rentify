import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CartCheckout(props) {
  const navigate = useNavigate();
  const handleCheckout = () => {
    console.log('props.loggedUser', props.loggedUser)
    const user = JSON.parse(props.loggedUser)

    if (!props.isLoggedIn) {
      alert("Please login to continue");
      return ;
    }

    const data = {
      user_id: user.id,
      product_id: props.checkoutItems[0].id,
      total: props.totalPrice,
      date: new Date().toISOString().slice(0, 10),
    }

    console.log('data', data)
    processOrder(data)
    props.setCartItem([])
  };

  const processOrder = async (data) => {
    const response = await fetch('http://localhost:8000/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const order = await response.json();
      
      if (order.id) {
        alert('Order placed successfully')
        navigate('/')
      }
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>
                    {props.checkoutItems.map((item) => {
                      return (
                      <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={item.imgUrl}
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <MDBTypography tag="h5" className="text-primary">
                          {item.productName}
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">${item.price}</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <span
                              className="quantity fw-bold text-black"
                              type="number"
                            >{item.qty} qty</span>
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>)
                    })}

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        ${props.totalPrice}
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      
                      <MDBInput
                        className="mb-5"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        type="text"
                        size="lg"
                        defaultValue="Andre Moura"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        By clicking the buy button, you agree to our 
                        <a href="#!"> Rental Policy</a>.
                      </p>

                      <Button onClick={() => handleCheckout()} variant="success" className="checkout-btn">
                        Buy now
                      </Button>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="/shop">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}