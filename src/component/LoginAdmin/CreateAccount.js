import img from '../imgs/40c007c647ea8034751aec3d7d283fa4.png';
import './login.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>

        <div className="add-login">
          <h1>!مرحبا ياشباب</h1>
          <div className="btn-login">
            <button id="create-btn" className="btn active-btn">
              انشاء حساب{" "}
            </button>
            <button id="log-btn" className="btn" onClick={() => navigate('/login')}>
              تسجيل دخول
            </button>
          </div>

          <div className="input-login">
            <h2>هيا انشأ حساب لك </h2>
            <div className="input-name">
              <input type="text" placeholder="الاسم" />
              <input type="email" placeholder="الايميل" />
              <input type="password" placeholder="الرقم السري" />
              <button className="submit-btn">انشاء حساب</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
