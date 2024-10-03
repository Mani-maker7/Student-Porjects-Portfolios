import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {/* Profile Section */}
                <div className="profile">
                    <img 
                        src="/profile.jpeg" // Use the relative path
                        alt="Profile" 
                        className="profile-img" // Add class for styling
                    />
                    <div className="user-info">
                        <h3>Admin Name</h3>
                        <p>Tech enthusiast and ...</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul>
                    <li><Link to="manage-students">Manage Students</Link></li>
                    <li><Link to="view-submissions">View Submissions</Link></li>
                    <li><Link to="provide-feedback">Provide Feedback</Link></li>
                    <li><Link to="review-milestones">Review Milestones</Link></li>
                </ul>

                {/* Settings and Logout Links */}
                <div className="bottom-links">
                    <ul>
                        <li><Link to="settings">Settings</Link></li>
                        <li><button className='login-button'><Link to="/login">Logout</Link></button></li>
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content">
                <Outlet /> {/* This will render the nested routes' content */}
            </div>
        </div>
    );
};

export default AdminDashboard;
