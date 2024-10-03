import React from 'react';
import { Link } from 'react-router-dom';

const ViewSubmissions = () => {
    // Sample submissions data
    const submissions = [
        { id: 1, name: "Manikanta's - Project 1", progress: 90 },
        { id: 2, name: "Manasa's - Project 1", progress: 50 },
        { id: 3, name: "Manisha's - Project 1", progress: 0 },
    ];

    return (
        <div className="submissions-container my-projects">
            <h2>Students Submissions</h2>
            <div className="filter-buttons">
                <button>Today</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>

            <ul className="submissions-list">
                {submissions.map((submission) => (
                    <li key={submission.id} className="submission-item">
                        <span>{submission.name}</span>
                        <span className="progress">{submission.progress}%</span>
                        <Link to={`/feedback/${submission.id}`} className="feedback-button">
                            Feedback
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewSubmissions;
