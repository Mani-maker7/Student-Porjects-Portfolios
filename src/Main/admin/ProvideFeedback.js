import React, { useState } from 'react';

const ProvideFeedback = () => {
    // State variables to store form data
    const [facultyId, setFacultyId] = useState('');
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [performance, setPerformance] = useState('');
    const [improvement, setImprovement] = useState('');

    // Function to simulate sending a verification code
    const sendVerificationCode = () => {
        alert('Verification code sent to your email!');
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!facultyId || !name || !studentId || !projectId || !verificationCode || !performance) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate submitting feedback
        alert(`Feedback submitted successfully! 
            Faculty ID: ${facultyId}
            Name: ${name}
            Student ID: ${studentId}
            Project ID: ${projectId}
            Performance: ${performance}
            Improvement: ${improvement}`);

        // Optionally reset the form
        setFacultyId('');
        setName('');
        setStudentId('');
        setProjectId('');
        setVerificationCode('');
        setPerformance('');
        setImprovement('');
    };

    return (
        <div className="feedback-form-container">
            <h1>Provide Feedback for Student</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="facultyId">Faculty ID</label>
                    <input
                        type="text"
                        id="facultyId"
                        value={facultyId}
                        onChange={(e) => setFacultyId(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="studentId">Student ID</label>
                    <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="projectId">Project ID</label>
                    <select
                        id="projectId"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        required
                    >
                        <option value="">Select Project</option>
                        <option value="project1">Project 1</option>
                        <option value="project2">Project 2</option>
                    </select>
                </div>

                <div className="form-group verification-code">
                    <label htmlFor="verificationCode">Verification Code</label>
                    <div className="verification-input">
                        <input
                            type="text"
                            id="verificationCode"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                        <button type="button" onClick={sendVerificationCode}>
                            Send Code
                        </button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Performance</label>
                    <div className="performance-options">
                        <label>
                            <input
                                type="radio"
                                name="performance"
                                value="Excellent"
                                checked={performance === 'Excellent'}
                                onChange={(e) => setPerformance(e.target.value)}
                                required
                            />
                            Excellent
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="performance"
                                value="Very Good"
                                checked={performance === 'Very Good'}
                                onChange={(e) => setPerformance(e.target.value)}
                            />
                            Very Good
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="performance"
                                value="Good"
                                checked={performance === 'Good'}
                                onChange={(e) => setPerformance(e.target.value)}
                            />
                            Good
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="performance"
                                value="Unsatisfactory"
                                checked={performance === 'Unsatisfactory'}
                                onChange={(e) => setPerformance(e.target.value)}
                            />
                            Unsatisfactory
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="improvement">What the student has to improve?</label>
                    <textarea
                        id="improvement"
                        rows="4"
                        value={improvement}
                        onChange={(e) => setImprovement(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default ProvideFeedback;
