import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Protected from "./layouts/protected";
import IsLogedIn from "./layouts/isLogedIn";
import ForgotPassword from "./widgets/layout/ForgotPassword";
import { Verification } from "./widgets/layout/Verification";
import { ToastContainer } from "react-toastify";
import Chart1 from "./widgets/layout/charts/Chart1";
import Chart2 from "./widgets/layout/charts/Chart2";
import ResetPassword from "./widgets/layout/ResetPassword";
import VerifiedResetPassword from "./widgets/layout/VerifiedResetPassword";
import AdsDetails from "./pages/dashboard/AdsDetails";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* <Route path="/dashboard/*" element={<Protected Component = {Dashboard} />} />
      <Route path="/auth/*" element={<IsLogedIn Component = {Auth} />} /> */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/dashboard/adsDetails/" element={<AdsDetails />} /> */}

        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/*" element={<ResetPassword />} />
        <Route path="/user-verified" element={<Verification />} />
        <Route
          path="/reset-password-verified"
          element={<VerifiedResetPassword />}
        />
        <Route path="/chart" element={<Chart2 />} />
      </Routes>
    </>
  );
}

export default App;
