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
import Personalsavings2 from '../src/pages/savings/PersonalSavings2.js';
import EmptySavings from '../src/pages/savings/EmptySavings.js';
import AddGoals from '../src/pages/savings/AddGoals.js';
import Modal from '../src/pages/savings/SavingUpdateModal.js';
import Login from '../src/pages/savings/Login.js';

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
              <Route path="/Personalsavings2" element={<Personalsavings2 />} />
              <Route path="/EmptySavings" element={<EmptySavings />} />
              <Route path="/Addgoals" element={<AddGoals />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
