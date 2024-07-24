import React, { useState, useEffect } from 'react';
import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
import { useNavigate} from 'react-router-dom'; // Import useNavigate hooks


function CheckOTP({ contact }) {
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpExpiry, setOtpExpiry] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Initialize OTP and expiration time
    if (!generatedOtp) {
      setGeneratedOtp(Math.floor(1000 + Math.random() * 9000).toString());
      const expiryTime = Date.now() + 3 * 60 * 1000; // 3 minutes from now
      setOtpExpiry(expiryTime);
    }

    // Timer to update time left
    const timer = setInterval(() => {
      const currentTime = Date.now();
      if (otpExpiry) {
        const remainingTime = Math.max(0, Math.floor((otpExpiry - currentTime) / 1000));
        setTimeLeft(remainingTime);
        if (remainingTime === 0) {
          clearInterval(timer);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [otpExpiry, generatedOtp]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (timeLeft === 0) {
      alert('OTP has expired. Please request a new code.');
      return;
    }
    if (otp.join('') === generatedOtp) {
      console.log('OTP Verified Successfully!');
       // Navigate to NewPassword route
       navigate('/new-password');

    } else {
      alert('Invalid OTP. Please try again.');
      navigate('/new-password');

    }
  };

  const formatTimeLeft = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const now = new Date();
    const isPM = now.getHours() >= 12;
    const suffix = isPM ? 'م' : 'ص';

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}${suffix}`;
  };

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1>OTP التحقق من</h1>
          <div className="input-login">
            <h2>{contact}{` المرسلة اليOTP أدخل كلمة مرور `}</h2>
          {/* <h2 class="otp-header">
  أدخل كلمة مرور
  <span class="otp-text">OTP</span>
  <span class="contact-info">المرسلة إلى <span id="contact-number">{contact}</span></span>
</h2> */}

            <div className="input-name">
              <form onSubmit={handleVerifyOtp} className='otp'>
                <div className='otp-form'>
                {otp.map((_, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    placeholder='-'
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    maxLength="1"
                    className={`otp-input ${otp[index] ? 'filled' : ''}`}
                  />
                ))}
                </div>

                {timeLeft > 0 && (
                <div className="timer">
                  <p>{formatTimeLeft(timeLeft)}</p>
                </div>
              )}
               <div className="resend">
                <p>
                  <span className="resend-link" onClick={() => {
                    setGeneratedOtp(Math.floor(1000 + Math.random() * 9000).toString());
                    setOtpExpiry(Date.now() + 3 * 60 * 1000); // Reset expiration time
                    setTimeLeft(180); // Reset timer
                  }}>
                <p> لم تتلقي الرمز ؟<a href='/#'>اعاده ارساله</a></p></span>
                </p>
              </div>

                  <button type="submit" className="verify-otp-button">ارسال</button>

              </form>
              {/* {timeLeft > 0 && (
                <div className="timer">
                  <p>Time left: {formatTimeLeft(timeLeft)}</p>
                </div>
              )}
               <div className="resend">
                <p>
                  <span className="resend-link" onClick={() => {
                    setGeneratedOtp(Math.floor(1000 + Math.random() * 9000).toString());
                    setOtpExpiry(Date.now() + 3 * 60 * 1000); // Reset expiration time
                    setTimeLeft(180); // Reset timer
                  }}>
                <p> لم تتلقي الرمز ؟<a href='/#'>اعاده ارساله</a></p></span>
                </p>
              </div> */}

              {/* <button type="submit" className="verify-otp-button">ارسال</button> */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOTP;