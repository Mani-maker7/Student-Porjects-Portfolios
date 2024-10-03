import React from 'react';
import './styles.css'; // Import the global CSS file
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Main/home/Signup';
import Login from './Main/home/Login';
import Home from './Main/home/Home'; // Ensure these components are created
import About from './Main/home/About';
import Contact from './Main/home/Contact';
import UserDashboard from './Main/user/UserDashboard';
import MyProjects from './Main/user/MyProjects';
import AddNewProject from './Main/user/AddNewProject';
import MilestoneTracker from './Main/user/MilestoneTracker';
import Portfolios from './Main/user/Portfolios';
import UserSettings from './Main/user/UserSettings'; // Create this component
import AdminDashboard from './Main/admin/AdminDashboard';
import ManageStudents from './Main/admin/ManageStudents'; // Create this component
import ViewSubmissions from './Main/admin/ViewSubmissions'; // Create this component
import ProvideFeedback from './Main/admin/ProvideFeedback'; // Create this component
import ReviewMilestones from './Main/admin/ReviewMilestones'; // Create this component
import AdminSettings from './Main/admin/AdminSettings'; // Create this component


const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <h1>SPP</h1>
                    </div>
                    <ul className="navbar-links">
                        <li>
                            <button><Link to="/" className="nav-link">Home</Link> </button>
                        </li>
                        <li>
                        <button> <Link to="/about" className="nav-link">About</Link> </button>
                        </li>
                        <li>
                        <button> <Link to="/contact" className="nav-link">Contact</Link> </button>
                        </li>
                        <li>
                        <button>  <Link to="/login" className="nav-button">Login</Link> </button>
                        </li>
                        <li>
                        <button>  <Link to="/signup" className="nav-button">Signup</Link> </button>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                     {/* User Dashboard Route with nested routes */}
                <Route path="/user/dashboard" element={<UserDashboard />}>
                    <Route path="my-projects" element={<MyProjects />} />
                    <Route path="add-project" element={<AddNewProject />} />
                    <Route path="milestone-tracker" element={<MilestoneTracker />} />
                    <Route path="portfolios" element={<Portfolios />} />
                    <Route path="user-settings" element={<UserSettings />} />
                </Route>

                <Route path="/admin/*" element={<AdminDashboard />}>
                    <Route path="manage-students" element={<ManageStudents />} />
                    <Route path="view-submissions" element={<ViewSubmissions />} />
                    <Route path="provide-feedback" element={<ProvideFeedback />} />
                    <Route path="review-milestones" element={<ReviewMilestones />} />
                    <Route path="admin-settings" element={<AdminSettings />} />
                </Route>

                </Routes>
            </div>
        </Router>
    );
};

export default App;