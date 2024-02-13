import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create operation
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data..",data)
    const res = await fetch(
      "https://65ca3ca43b05d29307e000b5.mockapi.io/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await res.json();
      console.log(result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
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
      });
  },
});

export default userDetail.reducer;
