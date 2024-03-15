import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CarrersPage from './pages/CarrersPage';
import ApplicationPage from './pages/ApplicationPage';
import ContactPage from './pages/ContactPage';
import LifeAtTechealerz from './pages/LifeAtTechealerz';
import ELearning from './pages/ELearing';
import Hr from './hrPortal/HrDashboard';
import Admin from './adminPortal/Admin';
import Candidates from './pages/Candidates';
import AdminDashboard from './adminPortal/AdminDashboard';
import LoginPage from './pages/LoginPage';
import CreateBlog from './pages/CreateBlog';
import TrainingPage from './pages/TrainingPage';
import JobOpeningPage from './pages/JobOpeningPage';
import OurTeam from './pages/OurTeam';
import AllBlogs from './pages/AllBlogs';
import GetBlogs from './pages/GetBlogs';
import TrainingUsers from './pages/TrainingUsers';
import ClientFeedBack from './pages/ClientFeedBack';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';
import HrJobOpening from './pages/HrJobOpening';
import HrApplicationsStatus from './pages/HrApplicationStatus';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/carrers' element={<CarrersPage />} />
        <Route path='/application' element={<ApplicationPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/life@techealerz' element={<LifeAtTechealerz />} />
        <Route path='/elearning' element={<ELearning />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hrdashboard' element={<Hr />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admindashboard/candidates' element={<Candidates />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/admindashboard/createblog' element={<CreateBlog />} />
        <Route path='/trainingpage' element={<TrainingPage />} />
        <Route path='/admindashboard/jobopening' element={<JobOpeningPage />} />
        <Route path='/ourdigitalinnovationteam' element={<OurTeam />} />
        <Route path='/admindashboard/allblogs' element={<AllBlogs />} />
        <Route path='/getBlogs' element={<GetBlogs />} />
        <Route path='/admindashboard/getalltrainingusers' element={<TrainingUsers />} />
        <Route path='/clientfeedback' element={<ClientFeedBack />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/hrdashboard/jobopening' element={<HrJobOpening />} />
        <Route path='/hrdashboard/candidates' element={<HrApplicationsStatus />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
