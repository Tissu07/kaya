import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ userId }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({});
  const host = 'http://localhost:5000';

  const getUserDetail = async () => {
    // API call 
    const response = await fetch(`${host}/api/auth/fetchUserDetail`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    setCustomerInfo(json);
  }

  useEffect(() => {
    getUserDetail()   
    
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Customer Dashboard</h1>

      {/* Account Information Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        {/* Display customer information */}
        {/* Example: */}
        <div className="flex space-x-4">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{customerInfo.name}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{customerInfo.email}</p>
          </div>
        </div>
      </section>

      {/* Order History Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        {/* Display a list of past orders */}
        {/* Example: */}
        <ul>
          {orderHistory.map((order) => (
            <li key={order._id}>
              <p>Order Number: {order.orderNumber}</p>
              <p>Status: {order.status}</p>
              {/* Display other order details as needed */}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <Link to="/">Home</Link>
      </section>
    </div>
  );
};

export default Dashboard;
