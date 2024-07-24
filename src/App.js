// import logo from './logo.svg';
// import './App.css';
import Navbar from './component/Navbar/Navbar';
import Student from './component/Student/Student';
import Profile from './component/Student/Profile';
import Parent from './component/Student/Parent';
import Purchases from './component/Student/Purchases';
import Progress from './component/Student/Progress';
import LoginHistory from './component/Student/LoginHistory';
import Add from './component/Student/Add';

import Login from './component/LoginAdmin/Login';
import CreateAccount from './component/LoginAdmin/CreateAccount';
import Forgetpassword from './component/LoginAdmin/Forgetpassword';
import NewPassword from './component/LoginAdmin/NewPassword';
import StudentInfo from './component/LoginAdmin/StudentInfo';
import ParentInfo from './component/LoginAdmin/ParentInfo';

import CheckOTP from './component/LoginAdmin/CheckOTP';

import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <>
            {/* <Navbar/> */}
            {/* <Student/> */}
            {/* <Profile/> */}
            {/* <Parent/> */}
            {/* <Purchases/> */}
            {/* <Progress/> */}
            {/* <LoginHistory/> */}
            {/* <Add/> */}
            {/* <Login/> */}
            {/* <CreateAccount/> */}
            {/* <Forgetpassword/> */}
            {/* <NewPassword/> */}
            {/* <StudentInfo/> */}
            {/* <ParentInfo/> */}

    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>

        <Route path="login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="/check-otp" element={<CheckOTP />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/parent-info" element={<ParentInfo />} />


        <Route path="/student" element={<Student/>}/>
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
        <Route path="/login-history" element={<LoginHistory/>}/>
        <Route path="/add" element={<Add/>}/>










      </Routes>
    </Router>

            
      </>
    </div>
  );
}

export default App;
