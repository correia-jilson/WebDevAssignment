import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from './JobsSlice';

const JobsList = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs.jobs);
    const loading = useSelector(state => state.jobs.loading);
    const error = useSelector(state => state.jobs.error);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h3>Available Jobs</h3>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h4>{job.companyName}</h4>
                        <p>{job.jobTitle}</p>
                        <p>Description: {job.description}</p>
                        <p>Salary: {job.salary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobsList;
