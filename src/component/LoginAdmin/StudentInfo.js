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

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
// function StudentInfo() {
//   const [inputs, setInputs] = useState({
//     phoneNumber: '',
//     country: '',
//     governorate: '',
//     academicYear: '',
//     subject: '',
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Add any form validation or processing logic here if needed
//     navigate('/parent-info');
//   };

//   const getFilledPercentage = () => {
//     const filledFields = Object.values(inputs).filter((value) => value.trim() !== '').length;
//     return filledFields * 20; // 20% per filled field, 5 fields total
//   };

//   const percentage = getFilledPercentage();

//   return (
//     <>
//       <div className="container-login">
//         <div className="img-login">
//           <img src={img} className="background" alt="imgLogin" />
//         </div>
//         <div className="add-login">
//           <h1>! هيا لتبدأ رحلتك</h1>
//           <div className="input-login">
//             <h2>عرفنا عن نفسك</h2>
//             <div className="input-name">
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="رقم تليفون الطالب"
//                 value={inputs.phoneNumber}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="البلد"
//                 value={inputs.country}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="governorate"
//                 placeholder="المحافظه"
//                 value={inputs.governorate}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="academicYear"
//                 placeholder="السنه الدراسيه"
//                 value={inputs.academicYear}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="عربى"
//                 value={inputs.subject}
//                 onChange={handleInputChange}
//               />
//               <button className="submit-btn" onClick={handleSubmit}>اكمل</button>
//             </div>
//           </div>
//           <div className="progress-container">
//             <div className="circle-progress" style={{ background: `conic-gradient(#4caf50 ${percentage}%, #e0e0e0 0)` }}>
//               <div className="percentage-text">{percentage}%</div>
//             </div>
//             <div className="line-progress" style={{ width: `${percentage}%` }}></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StudentInfo;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";

// function StudentInfo() {
//   const [inputs, setInputs] = useState({
//     phoneNumber: "",
//     country: "",
//     governorate: "",
//     academicYear: "",
//     subject: "",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevInputs) => ({
//       ...prevInputs,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Add any form validation or processing logic here if needed
//     navigate("/parent-info");
//   };

//   const getFilledPercentage = () => {
//     const totalFields = Object.keys(inputs).length;
//     const filledFields = Object.values(inputs).filter(
//       (value) => value.trim() !== ""
//     ).length;
//     return (filledFields / totalFields) * 100; // Percentage of filled fields
//   };

//   const percentage = getFilledPercentage();

//   return (
//     <>
//       <div className="container-login">
//         <div className="img-login">
//           <img src={img} className="background" alt="imgLogin" />
//         </div>
//         <div className="add-login">
//           <h1>! هيا لتبدأ رحلتك</h1>
//           <div className="input-login">
//             <h2>عرفنا عن نفسك</h2>
//             <div className="input-name">
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="رقم تليفون الطالب"
//                 value={inputs.phoneNumber}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="country"
//                 placeholder="البلد"
//                 value={inputs.country}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="governorate"
//                 placeholder="المحافظه"
//                 value={inputs.governorate}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="academicYear"
//                 placeholder="السنه الدراسيه"
//                 value={inputs.academicYear}
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="عربى"
//                 value={inputs.subject}
//                 onChange={handleInputChange}
//               />
//               <button className="submit-btn" onClick={handleSubmit}>
//                 اكمل
//               </button>
//             </div>
//           </div>
//           <div className="progress-container">
//             <div className="circle-container">
//               <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 {/* Background Circle */}
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   stroke="#E9E9E9"
//                   strokeWidth="6"
//                   fill="none"
//                 />
//                 {/* Progress Circle */}
//                 <circle
//                   cx="50"
//                   cy="51"
//                   r="45"
//                   stroke="#D01025"
//                   strokeWidth="5"
//                   strokeDasharray={`${percentage * 3.14} ${2 * Math.PI * 50}`}
//                   strokeDashoffset={`${(1 - percentage / 100) * (2 * Math.PI * 50)}`}
//                   fill="none"
//                   strokeLinecap="round"
//                   transform="rotate(-90 51.6927 50.7993)"
//                 />
//                 {/* Percentage Text */}
//                 <text
//                   x="50%"
//                   y="50%"
//                   dominantBaseline="middle"
//                   textAnchor="middle"
//                   fontSize="24"
//                   fill="#D01025"
//                 >
//                   {Math.round(percentage)}%
//                 </text>
//               </svg>
//               <div className="percentage-text">{Math.round(percentage)}%</div>
//             </div>
//             {/* Line Diagram */}
//             <div className="line-diagram">
//               <svg width="200" height="30" xmlns="http://www.w3.org/2000/svg">
//                 <line
//                   x1="0"
//                   y1="15"
//                   x2="200"
//                   y2="15"
//                   stroke="#D01025"
//                   strokeWidth="3"
//                 />
//                 <circle
//                   cx={(percentage / 50) * 200}
//                   cy="15"
//                   r="5"
//                   fill="#D01025"
//                 />
//                 <text
//                   x={(percentage / 50) * 200 + 10}
//                   y="20"
//                   fontSize="14"
//                   fill="#D01025"
//                 >
//                   {Math.round(percentage)}%
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StudentInfo;



            



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

  const handleSubmit = () => {
    // Add any form validation or processing logic here if needed
    navigate('/parent-info');
  };

  const calculateProgress = () => {
    const filledFields = Object.values(formValues).filter(value => value.trim() !== '').length;
    return (filledFields / 5) * 100; // Assuming there are 5 input fields
  };

  const progress = calculateProgress();

  return (
    <>
      <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1>! هيا لتبدأ رحلتك</h1>
          <div className="input-login">
            <h2>عرفنا عن نفسك</h2>
            <ProgressSVG progress={progress} />
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

