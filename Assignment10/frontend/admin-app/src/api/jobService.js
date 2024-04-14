import axios from 'axios';

const API_URL = '/api/jobs/';

export const createJob = async (jobData) => {
  const response = await axios.post(API_URL + 'create', jobData);
  return response.data;
};

export const fetchJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default {
  createJob,
  fetchJobs
};
