import React from 'react';

// Sample project data
const projects = [
    {
        id: 1,
        title: "Project 1",
        status: "In Process",
        image: "/path/to/image1.jpg" // Replace with actual image path
    },
    {
        id: 2,
        title: "Project 2",
        status: "Completed",
        image: "/path/to/image2.jpg" // Replace with actual image path
    },
    {
        id: 3,
        title: "Project 3",
        status: "Under Review",
        image: "/path/to/image3.jpg" // Replace with actual image path
    }
];

const MyProjects = () => {
    return (
        <div className="my-projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>Status: {project.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProjects;
