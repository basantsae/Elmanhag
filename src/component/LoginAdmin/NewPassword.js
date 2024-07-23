import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
import "./login.css";
import { useNavigate } from 'react-router-dom';
function NewPassword() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Add any form validation or processing logic here if needed
    navigate('/student-info');
  };

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1 >! هيا لتبدأ رحلتك</h1>
          <div className="input-login">
            <h2>انشاء رقم سري جديد</h2>
            <div className="input-name">
              <input type="password" placeholder="الرقم السري " />
              <input type="password" placeholder="تاكيد كلمه المرور" />
              <button className="submit-btn" onClick={handleSubmit}>ارسال</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
