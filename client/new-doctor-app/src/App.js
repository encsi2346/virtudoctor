import './App.css';
import "./style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import DoctorsListPatient from "./Pages/BasedRolePatient/DoctorsPatient/DoctorsListPatient";
import DiaryPatient from "./Pages/BasedRolePatient/DiaryPatient/DiaryPatient";
import MedicamentPatient from "./Pages/BasedRolePatient/MedicamentPatient/MedicamentPatient";
import AppointmentPatient from "./Pages/BasedRolePatient/AppointmentPatient/AppointmentPatient";
import News from "./Pages/BasedRolePatient/NewsPatient/NewsListPatient";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import Login from "./Pages/Login/Login";
import PreLoader from "./Components/PreLoader/PreLoader";
import Registration from "./Pages/Registration/Registration";
import NewPost from "./Pages/BasedRoleDoctor/NewsDoctor/NewPost/NewPost";
import AuthService from "./Services/AuthService";
import NewsPatient from "./Pages/BasedRolePatient/NewsPatient/NewsListPatient";
import DoctorsDoctor from "./Pages/BasedRoleDoctor/DoctorsDoctor/DoctorsDoctor";
import DiaryDoctor from "./Pages/BasedRoleDoctor/DiaryDoctor/DiaryDoctor";
import MedicamentDoctor from "./Pages/BasedRoleDoctor/MedicamentDoctor/MedicamentDoctor";
import AppointmentDoctor from "./Pages/BasedRoleDoctor/AppointmentDoctor/AppointmentDoctor";
import NewsDoctor from "./Pages/BasedRoleDoctor/NewsDoctor/NewsDoctor";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import DoctorPatient from "./Pages/BasedRolePatient/DoctorsPatient/DoctorPatient";
import AddDoctorPatient from "./Pages/BasedRolePatient/DoctorsPatient/AddDoctorPatient";
import AppointmentListPatient from "./Pages/BasedRolePatient/AppointmentPatient/AppointmentListPatient";
import DiaryPostListPatient from "./Pages/BasedRolePatient/DiaryPatient/DiaryPostListPatient";
import PrescriptionsPatient from "./Pages/BasedRolePatient/MedicamentPatient/PrescriptionsPatient";
import RequestListPatient from "./Pages/BasedRolePatient/MedicamentPatient/RequestListPatient";
import AppointmentsDoctor from "./Pages/BasedRoleDoctor/AppointmentDoctor/AppointmentsDoctor";
import AppointmentsPatientDoctor from "./Pages/BasedRoleDoctor/AppointmentDoctor/AppointmentsPatientDoctor";
import PrescriptionsDoctor from "./Pages/BasedRoleDoctor/MedicamentDoctor/PrescriptionsDoctor";
import RequestsDoctor from "./Pages/BasedRoleDoctor/MedicamentDoctor/RequestsDoctor";
import PatientsDoctor from "./Pages/BasedRoleDoctor/Patients/PatientsDoctor";
import NewPatientDoctor from "./Pages/BasedRoleDoctor/Patients/NewPatientDoctor";
import PatientsRequestDoctor from "./Pages/BasedRoleDoctor/Patients/PatientsRequestDoctor";
import PostsDoctor from "./Pages/BasedRoleDoctor/DiaryDoctor/PostsDoctor";


const App = () => {
  const [load, upadateLoad] = useState(true);
  /*const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);*/
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      //setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);


  return (
      <Router>
        <PreLoader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/home" exact element={<Home />}/>
            <Route path="/profile"  element={<Profile />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/registration"  element={<Registration />}/>

            <Route path="/doctors-doctor"  element={<DoctorsDoctor />}/>
            <Route path="/diary-doctor"  element={<DiaryDoctor />}/>
            <Route path="/diary-posts-doctor"  element={<PostsDoctor />}/>
            <Route path="/medicament-doctor"  element={<MedicamentDoctor />}/>
            <Route path="/requests-doctor"  element={<RequestsDoctor />}/>
            <Route path="/medicament-prescriptions-doctor"  element={<PrescriptionsDoctor />}/>
            <Route path="/appointment-doctor"  element={<AppointmentDoctor />}/>
            <Route path="/appointments-doctor"  element={<AppointmentsDoctor />}/>
            <Route path="/appointments-patient-doctor"  element={<AppointmentsPatientDoctor />}/>
            <Route path="/news-doctor"  element={<NewsDoctor />}/>
            <Route path="/new-post"  element={<NewPost />}/>
            <Route path="/patients"  element={<PatientsDoctor />}/>
            <Route path="/new-patients"  element={<NewPatientDoctor />}/>
            <Route path="/requests-from-patients"  element={<PatientsRequestDoctor />}/>

            <Route path="/doctors"  element={<DoctorsListPatient />}/>
            <Route path="/add"  element={<AddDoctorPatient />}/>
            <Route path="/doctors/:id"  element={<DoctorPatient />}/>
            <Route path="/diary-patient"  element={<DiaryPatient />}/>
            <Route path="/diary-posts-patient"  element={<DiaryPostListPatient />}/>
            <Route path="/medicament-patient"  element={<MedicamentPatient />}/>
            <Route path="/requests-patient"  element={<RequestListPatient />}/>
            <Route path="/medicament-prescriptions-patient"  element={<PrescriptionsPatient />}/>
            <Route path="/appointment-patient"  element={<AppointmentPatient />}/>
            <Route path="/appointments-patient"  element={<AppointmentListPatient />}/>
            <Route path="/news-patient"  element={<NewsPatient />}/>

          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App