import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/api/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: false
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export default userSlice.reducer;
