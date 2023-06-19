import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/order");
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
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          <p>User ID: {order.user_id}</p>
          <p>Product ID: {order.product_id}</p>
          <p>Total: {order.total}</p>
          <p>Date: {order.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
