// import Navbar from '../Navbar/Navbar';
// import './add.css'
// import { useState } from "react";

// function Add(){

//     const [inputValues, setInputValues] = useState({
//         name: "",
//         number: "",
//         email: "",
//         password: "",
//         category: "",
//       });
    
//       const [isVerified, setIsVerified] = useState(false);
    
//       // Function to handle input change
//       const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setInputValues({
//           ...inputValues,
//           [name]: value,
//         });
//       };
//     // Function to toggle the verified state and update data
//     const handleVerification = () => {
//         // Here, add any verification logic you need
//         const isDataVerified = true; // Example verification condition
    
//         if (isDataVerified) {
//           setIsVerified(true);
    
//           // Log the input values or send them to a server
//           console.log('Verified data:', inputValues);
    
//           // Clear input fields after verification
//           setInputValues({
//             name: "",
//             number: "",
//             email: "",
//             password: "",
//             category: "",
//           });
    
//           // Reset the verification state after a while to show the button as not verified
//           setTimeout(() => setIsVerified(false), 8000); // Example: Reset after 2 seconds
//         } else {
//           alert('Verification failed. Please check your inputs.');
//         }
//       };
//     return(

      
//         <>
//          <Navbar/>
//         <div className="contain">

//             <div className='add'>
//                 {/* <div className='add-title'>
//                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_772_3311)">
// <path d="M22.569 23.9496L30.7297 15.8857C31.159 15.4589 31.4 14.8816 31.4 14.2798C31.4 13.678 31.159 13.1006 30.7297 12.6738C30.5153 12.4603 30.2604 12.2908 29.9795 12.1752C29.6985 12.0595 29.3972 12 29.0929 12C28.7886 12 28.4873 12.0595 28.2064 12.1752C27.9255 12.2908 27.6705 12.4603 27.4562 12.6738L17.6819 22.3323C17.4658 22.5441 17.2943 22.796 17.1773 23.0736C17.0603 23.3512 17 23.6489 17 23.9496C17 24.2504 17.0603 24.5481 17.1773 24.8257C17.2943 25.1033 17.4658 25.3552 17.6819 25.567L27.4562 35.3394C27.6716 35.5505 27.927 35.7175 28.2079 35.8309C28.4888 35.9442 28.7895 36.0017 29.0929 36C29.3963 36.0017 29.6971 35.9442 29.9779 35.8309C30.2588 35.7175 30.5142 35.5505 30.7297 35.3394C31.159 34.9126 31.4 34.3352 31.4 33.7334C31.4 33.1316 31.159 32.5543 30.7297 32.1275L22.569 23.9496Z" fill="#D01025"/>
// </g>
// <defs>
// <clipPath id="clip0_772_3311">
// <rect width="48" height="48" rx="12" fill="white"/>
// </clipPath>
// </defs>
//                     </svg>
//                     <h1>Add</h1>
//                 </div>        */}

//             <div className='student_details'>
//                 <h1>Student Information</h1>

//                 <div className="profile-detail">
//             <input
//               type="text"
//               value={inputValues.name}
//               name="name"
//               onChange={handleInputChange}
//               placeholder="Name"
//             />
//             <input
//               type="text"
//               value={inputValues.number}
//               name="number"
//               onChange={handleInputChange}
//               placeholder="Number"
//             />
//             <input
//               type="email"
//               value={inputValues.email}
//               name="email"
//               onChange={handleInputChange}
//               placeholder="Email"
//             />
//             <input
//               type="password"
//               value={inputValues.password}
//               name="password"
//               onChange={handleInputChange}
//               placeholder="Password"
//             />
//             <input
//               type="text"
//               value={inputValues.category}
//               name="category"
//               onChange={handleInputChange}
//               placeholder="Category"
//             />

            
//             </div>

//             </div>

//     </div>
//     </div>
//         </>
//     )
// }

// export default Add;