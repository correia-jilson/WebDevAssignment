import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createJob } from './JobsSlice'; // Action for creating a new job

const AddJobForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createJob({ companyName, jobTitle, description, salary }));
        // Reset form fields after submission
        setCompanyName('');
        setJobTitle('');
        setDescription('');
        setSalary('');
    };

    return (
        <div>
            <h3>Add New Job</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddJobForm;
