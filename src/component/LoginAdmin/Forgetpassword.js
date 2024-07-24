import React, { useState } from 'react';
import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
import CheckOTP from './CheckOTP'; // Import CheckOTP component
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


function Forgetpassword() {
  const [inputValue, setInputValue] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Trigger CheckOTP view
    setShowOtp(true);
  };

  // const navigate = useNavigate(); // Initialize useNavigate
  // const handleSubmit = () => {
  //   navigate('/check-otp', { state: { contact: inputValue } }); // Navigate to CheckOTP route with state
  // };

  return (
    <>
      {showOtp ? (
        navigate('/check-otp', { state: { contact: inputValue } }) // Navigate to CheckOTP route with state
      ) : (
        <div className="container-login">
          <div className="img-login">
            <img src={img} className="background" alt="imgLogin" />
          </div>
          <div className="add-login">
            <h1>هل نسيت كلمه المرور</h1>
            <div className="input-login">
                <h2>  {`يرجى تسجيل هاتفك أو بريدك
                          الإلكتروني  OTP لتسليم`}</h2> 
              <div className="input-name">
                <input
                  type="text"
                  placeholder="الايميل او رقم التليفون"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button className="submit-btn" onClick={handleSubmit}>
                  اكمل
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Forgetpassword;

