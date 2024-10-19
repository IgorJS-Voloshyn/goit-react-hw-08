import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/singup", credentials);
      console.log(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});