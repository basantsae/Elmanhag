import img from '../imgs/40c007c647ea8034751aec3d7d283fa4.png';
import './login.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { login } from './Apiservice'; // Adjust the import path as needed
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      if (response.success) {
        console.log("Login Successfully")
        localStorage.setItem('token', response._token);
        navigate('/'); // Adjust the path as needed
      } else {
        setError('Login failed: ' + (response.faild || 'input value'));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className='background' alt='imgLogin'/>
        </div>
        <div className="add-login">
          <h1>!مرحبا ياشباب</h1>
          <div className='btn-login'>
            <button id='create-btn' className='btn' onClick={() => navigate('/create-account')}>انشاء حساب</button>
            <button id='log-btn' className='btn active-btn'>تسجيل دخول</button>
          </div>
          <div className='input-login'>
            <h2>هيا سجل دخولك</h2>
            <div className='input-name'>
              <input
                type='text'
                placeholder='البريد الالكتروني'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='الرقم السري'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='forgetpass-btn' onClick={() => navigate('/forget-password')}>هل نسيت كلمه المرور؟</button>
              <button className='submit-btn' onClick={handleSubmit}>تسجيل الدخول</button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
