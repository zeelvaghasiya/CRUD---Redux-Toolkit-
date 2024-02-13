import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create operation
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data..", data);
    const res = await axios
      .post("https://65ca3ca43b05d29307e000b5.mockapi.io/user", data)
      .then((response) => response.data);

    try {
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read operation
export const showData = createAsyncThunk(
  "showData",
  async (args, { rejectWithValue }) => {
    const res = await axios
      .get("https://65ca3ca43b05d29307e000b5.mockapi.io/user")
      .then((response) => response.data);

    try {
      console.log("getUserData...", res);
      return res;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showData.pending, (state) => {
        state.loading = true;
      })
      .addCase(showData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;
