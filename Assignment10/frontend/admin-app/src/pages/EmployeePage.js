import React from 'react';
import JobsList from './features/jobs/JobsList'; // Component to display list of jobs

const EmployeePage = () => {
    return (
        <div>
            <h1>Employee Dashboard</h1>
            <h2>Available Jobs</h2>
            <JobsList /> {/* Displays a list of jobs */}
        </div>
    );
};

export default EmployeePage;
