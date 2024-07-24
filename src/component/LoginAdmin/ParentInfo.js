import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
import "./login.css";
import { useState } from "react";


const ProgressSVG = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="103" height="102" viewBox="0 0 103 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="51.5" cy="51" r="45" stroke="#E9E9E9" strokeWidth="7"/>
      <circle
        cx="51.5"
        cy="51"
        r="45"
        stroke="#D01025"
        strokeWidth="7"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
      />
      <text x="51.5" y="55" textAnchor="middle" fontSize="20" fill="#D01025">{`${progress}%`}</text>
    </svg>
  );
};


function ParentInfo(){
  const [formValues, setFormValues] = useState({
    name:'',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const calculateProgress = () => {
    const filledFields =Object.values(formValues).filter(value => value.trim() !== '').length;

    return (filledFields /4) * 100 +50; // Assuming there are 5 input fields
  };

  const progress = calculateProgress();

  const getFilledPercentage = () => {
    const filledFields =Object.values(formValues).filter((value) => value.trim() !== '').length;
    return (filledFields /4) * 100 +50; // Assuming there are 5 input fields
  };

  const percentage = getFilledPercentage();

    return(
        <>
        <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1 >! هيا لتبدأ رحلتك</h1>
          <div className="input-login">
          <div className="svg">
            <ProgressSVG progress={progress} />
            <div className="progress">
                <div className="line-progress" style={{ width: `${percentage}%` }}></div>
            </div>
            </div>
            <h2>عرفنا عن نفسك</h2>
            <div className="input-name">
              <input type="text" name="name" placeholder="اسم ولى الامر" value={formValues.name}
                onChange={handleChange} />
              <input type="text" name="phoneNumber" placeholder="رقم هاتف ولى الامر" value={formValues.phoneNumber}
                onChange={handleChange} />
              <button className="submit-btn">ارسال</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ParentInfo;