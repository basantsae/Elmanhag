// import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
// import "./login.css";
// import { useNavigate } from 'react-router-dom';

// function StudentInfo(){

//   const navigate = useNavigate();
//   const handleSubmit = () => {
//     // Add any form validation or processing logic here if needed
//     navigate('/parent-info');
//   };
//     return(
//         <>
//         <div className="container-login">
//         <div className="img-login">
//           <img src={img} className="background" alt="imgLogin" />
//         </div>
//         <div className="add-login">
//           <h1 >! هيا لتبدأ رحلتك</h1>
//           <div className="input-login">
//             <h2>عرفنا عن نفسك</h2>
//             <div className="input-name">
//               <input type="text" placeholder="رقم تليفون الطالب" />
//               <input type="text" placeholder="البلد" />
//               <input type="text" placeholder="المحافظه" />
//               <input type="text" placeholder="السنه الدراسيه" />
//               <input type="list" placeholder="عربى" />
//               <button className="submit-btn" onClick={handleSubmit}>اكمل</button>
//             </div>
//           </div>
//         </div>
//       </div>
//         </>
//     )
// }

// export default StudentInfo;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";


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

function StudentInfo() {
  const [formValues, setFormValues] = useState({
    phoneNumber: '',
    country: '',
    province: '',
    schoolYear: '',
    language: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // const handleSubmit = () => {
  //   // Add any form validation or processing logic here if needed
  //   navigate('/parent-info',{ state: { contact: inputValue } });
  // };

  

  const calculateProgress = () => {
    const filledFields = Object.values(formValues).filter(value => value.trim() !== '').length;
    const fill=(filledFields / 10) * 100;
    return fill// Assuming there are 5 input fields
  };

  const progress = calculateProgress();

  const getFilledPercentage = () => {
    const filledFields = Object.values(formValues).filter((value) => value.trim() !== '').length;
    const fill=(filledFields / 10) * 100;
    return fill// Assuming there are 5 input fields
      };

  const percentage = getFilledPercentage();

  const handleSubmit = () => {
    // Add any form validation or processing logic here if needed
    navigate('/parent-info',{ state: { fill: getFilledPercentage() } });
  };


  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1>! هيا لتبدأ رحلتك</h1>
          <div className="input-login">
          <div className="svg">
            <ProgressSVG progress={progress} />
            <div className="progress">
                <div className="line-progress" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
            <h2>عرفنا عن نفسك</h2>
            <div className="input-name">
              <input
                type="text"
                name="phoneNumber"
                placeholder="رقم تليفون الطالب"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="البلد"
                value={formValues.country}
                onChange={handleChange}
              />
              <input
                type="text"
                name="province"
                placeholder="المحافظه"
                value={formValues.province}
                onChange={handleChange}
              />
              <input
                type="text"
                name="schoolYear"
                placeholder="السنه الدراسيه"
                value={formValues.schoolYear}
                onChange={handleChange}
              />
              <input
                type="text"
                name="language"
                placeholder="عربى"
                value={formValues.language}
                onChange={handleChange}
              />
              <button className="submit-btn" onClick={handleSubmit}>اكمل</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentInfo;


