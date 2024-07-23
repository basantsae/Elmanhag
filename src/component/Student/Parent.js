import "./profile.css";
import { useState } from "react";
import img from "../imgs/a10a604487ef43242c838874e50f3c73.png";
function Parent() {
  const [inputValues, setInputValues] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    category: "",
  });

  const [isVerified, setIsVerified] = useState(false);

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
// Function to toggle the verified state and update data
const handleVerification = () => {
    // Here, add any verification logic you need
    const isDataVerified = true; // Example verification condition

    if (isDataVerified) {
      setIsVerified(true);

      // Log the input values or send them to a server
      console.log('Verified data:', inputValues);

      // Clear input fields after verification
      setInputValues({
        name: "",
        number: "",
        email: "",
        password: "",
        category: "",
      });

      // Reset the verification state after a while to show the button as not verified
      setTimeout(() => setIsVerified(false), 8000); // Example: Reset after 2 seconds
    } else {
      alert('Verification failed. Please check your inputs.');
    }
  };

  return (
    <>
      <div className="contain">
        <div className="student-info">
          <button id="profile-btn">Profile</button>
          <button id="parent-btn" className="active">
            Parents
          </button>
          <button id="purchase-btn">Purchases</button>
          <button id="progress-btn">Progress</button>
          <button id="loginHistory-btn">Login History</button>
        </div>

        <div className="profile-page">
          <div className="img-name">
            <div className="img-profile">
              <img src={img} className="photo" alt="profilePicture" />
            </div>
            <div className="name-email">
              <h3>Ahmed Wagih</h3>
              <h4>AhmedWagih141@gmail.com</h4>
            </div>
          </div>

          <div className="profile-detail">
            <input
              type="text"
              value={inputValues.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              value={inputValues.number}
              name="number"
              onChange={handleInputChange}
              placeholder="Number"
            />
            <input
              type="email"
              value={inputValues.email}
              name="email"
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              value={inputValues.password}
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="text"
              value={inputValues.category}
              name="category"
              onChange={handleInputChange}
              placeholder="Category"
            />

            <div className="verified">
              <h3>verified :</h3>
              <button
             onClick={handleVerification}
             style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  //   marginTop: '10px'
                }}
              >
                <svg
                  width="50"
                  height="32"
                  viewBox="0 0 60 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="60"
                    height="32"
                    rx="16"
                    fill={isVerified ? "#00FF00" : "#D01025"}
                  />
                  <circle cx="44" cy="16" r="12" fill="white" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Parent;
