// src/redux/exercisedetail/exercisedetail.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

export const fetchExerciseDetail = createAsyncThunk(
    "exercisedetail/fetchExerciseDetail",
    async(uuid) => {
        const response = await fetch(`${BASE_URL}/exercises/${uuid}`);
        const data = await response.json()
        console.log("data1", data.payload)
        return data.payload;
    }
);

const exerciseDetailSlice = createSlice({
    name: "exerciseDetail",
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchExerciseDetail.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectExerciseDetail = (state) => state.exerciseDetail;
export default exerciseDetailSlice.reducer;