import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {/* Profile Section */}
                <div className="profile">
                    <img 
                        src="/user.jpeg" // Use the same relative path as in AdminDashboard
                        alt="Profile" 
                        className="profile-img" // Add class for styling, same as AdminDashboard
                    />
                    <div className="user-info">
                        <h3>User Name</h3>
                        <p>Tech enthusiast and ...</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <ul>
                    <li><Link to="my-projects">My Projects</Link></li>
                    <li><Link to="add-project">Add New Project</Link></li>
                    <li><Link to="milestone-tracker">Milestone Tracker</Link></li>
                    <li><Link to="portfolios">Portfolios</Link></li>
                </ul>

                {/* Settings and Logout Links */}
                <div className="bottom-links">
                    <ul>
                        <li><Link to="settings">Settings</Link></li>
                        <button className="login-button">
                            <li><Link to="/login">Logout</Link></li>
                        </button>
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default UserDashboard;
