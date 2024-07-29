import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authAction = createAsyncThunk(
  "auth",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(authAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.user_id;
        state.token = action.payload.token;
            })
      .addCase(authAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
