import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "getUsers",
  // async (dataProvidedInFunctionParameter, { getState, dispatch }) => {}
  async () => {}
);

export const getUser = createAsyncThunk("getUser", async () => {});

export const addUser = createAsyncThunk("addUser", async () => {});

export const updateUser = createAsyncThunk("updateUser", async () => {});

export const deleteUser = createAsyncThunk("deleteUser", async () => {});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: true,
    user: null,
    results: [],
    page: 1,
    limit: 20,
    totalPages: 0,
    totalResults: 0,
    error: "",
  },
  reducers: {
    // Actions
    resetState: (state) => {
      state.loading = true;
      state.user = null;
      state.results = [];
      state.page = 1;
      state.limit = 20;
      state.totalPages = 0;
      state.totalResults = 0;
      state.error = "";
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

// Action creators generated for each case reducer function
export const { resetState } = usersSlice.actions;

// Exporting default reducer
export default usersSlice.reducer;
