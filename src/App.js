// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/pages/home/Home';
import Sidebar from '../src/pages/dashboards/Savings/Sidebar.js';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/Auth/Login.js';
import DashBoard from './pages/dashboardmain/Dashboard.js';

// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <Routes>
              {/* ... (your existing routes) */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/dashboard" element={<DashBoard/>} />
            </Routes>
            <Routes>
              <Route path="/LandingPage" element={<LandingPage />} />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
