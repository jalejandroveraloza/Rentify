import { useEffect, useState } from "react";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/order/user/21");
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error("Error retrieving orders:", response.status);
      }
    } catch (error) {
      console.error("Error retrieving orders:", error);
    }
  };

  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-info">
              <h3 className="order-id">Order ID: {order.id}</h3>
              <p className="order-detail">User ID: {order.user_id}</p>
              <p className="order-detail">Product ID: {order.product_id}</p>
              <p className="order-detail">Total: {order.total}</p>
              <p className="order-detail">Date: {order.date.slice(0, 10)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
