import React from 'react';
import UsersTable from '../features/users/UsersTable'; // Component to display users in a table
import AddJobForm from '../features/jobs/AddJobForm'; // Form for admins to add jobs

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Manage Users</h2>
            <UsersTable /> {/* Displays a table of users */}
            <h2>Add a Job</h2>
            <AddJobForm /> {/* Form for adding new jobs */}
        </div>
    );
};

export default AdminPage;
