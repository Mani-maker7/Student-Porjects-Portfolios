import React from 'react';

const Portfolios = () => {
    return (
        <div className="portfolio-container">
            <div className="user-info">
                <div className="profile">
                    <img src="/user.jpeg" alt="Profile" className="profile-img" />
                    <div className="user-details">
                        <h2>V Mani</h2>
                        <p>Student</p>
                        <p>Email: 2200031837@kluniversity.in</p>
                        <p>Phone Number: 9908513859</p>
                        <p>LinkedIn: V.B.V.Manikanta</p>
                    </div>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>React Js</li>
                        <li>SpringBoot</li>
                        <li>MySql</li>
                    </ul>
                </div>
            </div>

            <div className="projects-completed">
                <h3>Projects Completed</h3>
                <div className="time-filter">
                    <button>Today</button>
                    <button>Weekly</button>
                    <button>Monthly</button>
                </div>
                <div className="project-list">
                    <div className="project">
                        <span>1 P1</span>
                        <div className="project-name">Project 1</div>
                        <div className="progress-bar" style={{ width: '90%' }}>90%</div>
                    </div>
                    <div className="project">
                        <span>2 P2</span>
                        <div className="project-name">Project 2</div>
                        <div className="progress-bar" style={{ width: '50%' }}>50%</div>
                    </div>
                    <div className="project">
                        <span>3 P3</span>
                        <div className="project-name">Project 3</div>
                        <div className="progress-bar" style={{ width: '0%' }}>0%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolios;
