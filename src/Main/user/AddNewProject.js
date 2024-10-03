import React from 'react';

const AddNewProject = () => {
    return (
        <div>
            <h2>Add New Project</h2>
            <form>
                <input type="text" placeholder="Project Name" />
                <textarea placeholder="Project Description"></textarea>
                <br/>
                <button className='login-button' type="submit">Add Project</button>
            </form>
        </div>
    );
};

export default AddNewProject;
