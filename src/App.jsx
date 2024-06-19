import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadBook from "./Pages/ReadBook/ReadBook.jsx";
import SignUp from "./Pages/BoardingPage/Signup/Signup";
import DashBoard from "./Pages/dashBoard/dashBoard.jsx";
import Login from "./Pages/BoardingPage/login/Login.jsx";
import LandingPage from "./Pages/LandingPage/landingPage";
import Verify from "./Pages/BoardingPage/VerifyOtp/Verifyotp";
import RestPassword from "./Pages/BoardingPage/resetPassword/ResetPassword";
import ForgotPassword from "./Pages/BoardingPage/ForgotPassword/ForgotPassword";


function ROUTER() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="verify-otp" element={<Verify />} />
        <Route path="restpassword" element={<RestPassword />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="read-book" element={<ReadBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ROUTER;
