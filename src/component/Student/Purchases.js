// import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
function Purchases() {

    const [data] = useState(['']);
  return (
    <>
      <div className="contain">
        <div className="student-info">
          <button id="profile-btn">Profile</button>
          <button id="parent-btn">Parents</button>
          <button id="purchase-btn" className="active">Purchases</button>
          <button id="progress-btn">Progress</button>
          <button id="loginHistory-btn">Login History</button>
        </div>


        <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Service</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Payment Method</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td> {/* Count column */}
              <td>{row.category}</td>
              <td>{row.service}</td>
              <td>{row.category}</td>
              <td>{row.price}</td>
              <td>{row.discount}</td>
              <td>{row.payment}</td>
              <td>{row.type}</td>
              <td>{row.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


      </div>
    </>
  );
}

export default Purchases;
