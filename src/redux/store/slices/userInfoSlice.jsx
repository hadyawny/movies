import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfoAction = createAsyncThunk(
  "user/fetchUserInfo",
  async (userId) => {
    const response = await axios.get(`https://moviesbackend-6ois.onrender.com/api/v1/users/${userId}`);
    return response.data.document[0]; 
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userInfoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userInfoAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(userInfoAction.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
