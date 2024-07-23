// import Navbar from "../Navbar/Navbar";
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons from react-icons
import React, { useState } from 'react';
import "./student.css";
import Navbar from '../Navbar/Navbar.js';
function Student() {
  

    const [data, setData] = useState([
        { name: 'John Doe', phone: '123-456-7890', country: 'USA', city: 'New York', category: 'Student', paid: 'Free', status: 'Active' },
        { name: 'Jane Smith', phone: '987-654-3210', country: 'UK', city: 'London', category: 'Parent', paid: 'Paid', status: 'Banned' },
        { name: 'Alice Johnson', phone: '456-789-0123', country: 'Canada', city: 'Toronto', category: 'Admin', paid: 'Free', status: 'Pending' },
        // Add more data as needed
      ]);
    
      const handleEdit = (index) => {
        // Handle edit action
        console.log('Edit row:', index);
      };
    
      const handleDelete = (index) => {
        // Handle delete action
        console.log('Delete row:', index);
      };

  return (
    <>

    <Navbar/>
      <div className="contain">
        <h1 className="student-text">Student</h1>

        <div className="cards">
            <div className="card">
                <h3 className="title">Total Students</h3>
                <div className="count">
                    <h1>100</h1>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Free Students</h3>
                <div className="count">
                    <h1>100</h1>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Paid number</h3>
                <div className="count">
                    <h1>100</h1>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Banned number</h3>
                <div className="count">
                    <h1>100</h1>
                </div>
            </div>
        </div>


        <div className="filter">
            <div className="search-filter">
                <input type="search" className="search-bar" placeholder="Search"/> 
            </div>

            <div className="country-filter">
                <input type="text" className="filter-bar" placeholder="Filter By Country"/> 
            </div>

            <div className="city-filter">
                <input type="text" className="filter-bar" placeholder="Filter By City"/> 
            </div>

            <div className="paid-filter">
                <input type="text" className="filter-bar" placeholder="Filter by free/paid"/> 
            </div>

            <div className="add">
                <button className="add-btn">
                    Add
                </button>
            </div>
        </div>

        {/* <div className="table">

            <div className="head-table">
            </div>

        </div> */}

    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name <br/>Phone</th>
            <th>Country <br/> City</th>
            <th>Category</th>
            <th>Free / Paid</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Count column */}
              <td>
                <div>{row.name}</div>
                <div>{row.phone}</div>
              </td>
              <td>
                <div>{row.city}</div>
                <div>{row.country}</div>
              </td>
              <td>{row.category}</td>
              <td>{row.paid}</td>
              <td>{row.status}</td>
              <td>
                <FaEdit onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px',color:'#4CAF50' }} />
                <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer',color:'#d01025' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


      </div>
    </>
  );
}
export default Student;
