// src/components/OtpInput.js
// import React, { useState } from 'react';
// import './login.css';

// const OTPinput = ({ length, onChangeOtp }) => {
//     const [otp, setOtp] = useState(Array(length).fill(''));

//     const handleChange = (e, index) => {
//         const value = e.target.value;
//         if (/[^0-9]/.test(value)) return;

//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);
//         onChangeOtp(newOtp.join(''));

//         if (value && index < length - 1) {
//             document.getElementById(`otp-${index + 1}`).focus();
//         }
//     };

//     const handleKeyDown = (e, index) => {
//         if (e.key === 'Backspace' && index > 0 && !otp[index]) {
//             document.getElementById(`otp-${index - 1}`).focus();
//         }
//     };

//     return (
//         <div className="otp-container">
//             {otp.map((_, index) => (
//                 <input
//                     key={index}
//                     id={`otp-${index}`}
//                     type="text"
//                     value={otp[index]}
//                     onChange={(e) => handleChange(e, index)}
//                     onKeyDown={(e) => handleKeyDown(e, index)}
//                     maxLength="1"
//                     className={`otp-input ${otp[index] ? 'filled' : ''}`}
//                 />
//             ))}
//         </div>
//     );
// };

// export default OTPinput;
