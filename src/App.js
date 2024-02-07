// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import Kyc from './pages/Kyc';
import Sidebar from '../src/pages/dashboards/Savings/Sidebar.js';
import LandingPage from './pages/landingPage/LandingPage';
// import Login from './pages/Auth/Login.js';
import Personalsavings2 from '../src/pages/savings/PersonalSavings2.js';
import EmptySavings from '../src/pages/savings/EmptySavings.js';
import EmptyGroupSavings from './pages/GroupSavings/EmptyGroupSavings.js';
import AddGoals from '../src/pages/savings/AddGoals.js';
import Modal from '../src/pages/savings/SavingUpdateModal.js';
import Signin from '../src/pages/Auth/Login/Sginin.js';
import Signup from '../src/pages/Auth/Signup/Signup.js';
import { ResetPassword } from './pages/Auth/ResetPassword.js';
import { ForgotPassword } from './pages/Auth/ForgotPassword.js';
import DashBoard from './pages/dashboardmain/Dashboard.js';
import SignupModal from './pages/Auth/Signup/SignupModal.js';
import EmailVerifiedModal from './pages/Auth/Signup/EmailVerifiedModal.js';
import CreditModal from './components/dashboard/CreditModal.js';
import CreditSuccessfulModal from './components/dashboard/CreditSuccessfulModal.js';
import Withdrawalform from './pages/dashboards/WithdrawalModal/Withdrawalform.js';
import Paystack from './pages/Paystack.js';
import Navbar from './pages/dashboards/Savings/Navbar.js';
import Dashboard2 from './components/Dashboard2.js';
import Successfulwithdrawal from './pages/dashboards/WithdrawalModal/Successfulwithdrawal.js';
import PersonalSavingDetailsPage from './pages/savings/PersonalSavingDetailsPage.js';
import WithdrawFunds from './components/dashboard/WithdrawFunds.js';
import DashboardSection from './pages/ExploreActiveGroups/DashboardSection/DashboardSection.js';
import EmptyGroup from './pages/group/EmptyGroup.js';
import UpdateUser from './User/UpdateUser.js';
import AddGroupSavings from './pages/GroupSavings/AddGroupSavings.js';
import AddGroupSavingsModal from './components/modal/AddGroupSavingsModal.js';

// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <Routes>
              {/* ... (your existing routes) */}
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/Personalsavings2" element={<Personalsavings2 />} />
              <Route path="/EmptySavings" element={<EmptySavings />} />
              <Route path="/EmptyGroup" element={<EmptyGroup />} />
              <Route
                path="/EmptyGroupSavings"
                element={<EmptyGroupSavings />}
              />
              <Route path="/Addgoals" element={<AddGoals />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="signin" element={<Signin />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/Navbar" element={<Navbar />} />
              <Route path="/LandingPage" element={<LandingPage />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<DashBoard />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/kyc-verification" element={<Kyc />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/SignupModal" element={<SignupModal />} />
              <Route path="/dash" element={<Dashboard2 />} />
              <Route
                path="/EmailVerifiedModal"
                element={<EmailVerifiedModal />}
              />
              <Route path="/CreditModal" element={<CreditModal />} />
              <Route
                path="/CreditSuccessfulModal"
                element={<CreditSuccessfulModal />}
              />
              <Route path="/withdrawalform" element={<Withdrawalform />} />
              <Route path="/paystack" element={<Paystack />} />
              <Route
                path="/successfulwithdrawal"
                element={<Successfulwithdrawal />}
              />
              <Route
                path="/personal-saving-details"
                element={<PersonalSavingDetailsPage />}
              />
              <Route path="/withdraw" element={<WithdrawFunds />} />
              <Route path="/dashboardsection" element={<DashboardSection />} />
              <Route
                path="/create-group-savings"
                element={<AddGroupSavings />}
              />
              <Route
                path="/add-group-savings-modal"
                element={<AddGroupSavingsModal />}
              />
              <Route path="/Updateprofile" element={<UpdateUser />} />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
