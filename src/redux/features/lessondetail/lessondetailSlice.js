import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
//state
const initialState = {
   excercises:[],
    // idle -> |pending|fulfilled|rejected|
    status: "idle",
    error: null 
}
export const fetchExcersices = createAsyncThunk(
    "excercise/fetchExcersices",    
    async() => {
        const response = await fetch(`${BASE_URL}/exercises`);
        const data = await response.json()
        console.log("data1", data.payload)
        return data.payload; 
    }
);
export const lessondetailSlice = createSlice({
    name: 'excercises',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExcersices.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchExcersices.fulfilled, (state, action) => {
                state.status = "success";
                state.excercises = action.payload;
            })
            .addCase(fetchExcersices.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});
//export reducer
export default lessondetailSlice.reducer;
//state.reducer.product(in initialState)
export const selectExcersice = ((state) => state.excersice.excercises);