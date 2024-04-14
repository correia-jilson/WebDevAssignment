import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch jobs from the backend
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const response = await axios.get('/api/jobs'); // Adjust the endpoint as per your backend API
    return response.data;
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [fetchJobs.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchJobs.fulfilled]: (state, action) => {
            state.loading = false;
            state.jobs = action.payload;
        },
        [fetchJobs.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export default jobsSlice.reducer;
