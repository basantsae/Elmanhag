import React, { useState } from 'react';
function LoginHistory(){
    const [data] = useState(['']);
    return(
        <>
        <div className="contain">
            <div className="student-info">
                <button id="profile-btn">Profile</button>
                <button id="parent-btn">Parents</button>
                <button id="purchase-btn">Purchases</button>
                <button id="progress-btn">Progress</button>
                <button id="loginHistory-btn" className="active">Login History</button>
            </div>

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Os</th>
            <th>Browser</th>
            <th>Device</th>
            <th>Ip Address</th>
            <th>Country</th>
            <th>City</th>
            <th>Lat Long</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.os}</td> {/* Count column */}
              <td>{row.browser}</td>
              <td>{row.device}</td>
              <td>{row.ipAddress}</td>
              <td>{row.country}</td>
              <td>{row.city}</td>
              <td>{row.latLong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



        </div>

        </>
    )
}

export default LoginHistory;