import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

const initialState ={
    user: {},
    // verifyEmail: {},
    status: 'idle',
    error: null,
};

export const fetchCreateUser = createAsyncThunk(
    "user/fetchCreateUser",
    async({ username, email, password, confirm_password }) =>{
        const body = JSON.stringify({
            username,
            email,
            password,
            confirm_password
        });
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body
        });
        const user = await response.json();
        return user;
    }
);

// export const fetchCreateLogin = createAsyncThunk(
//     "user/fetchCreateLogin",
//     async ({ email, password }) => {
//       const body = JSON.stringify({
//         email,
//         password
//       });
//       const response = await fetch(`${BASE_URL}login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body
//       });
//       const apiResponse = await response.json();
//       return apiResponse;
//     }
// );

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
           .addCase(fetchCreateUser.pending, (state) => {
                state.status = "loading";
            })
           .addCase(fetchCreateUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
           .addCase(fetchCreateUser.rejected, (state) => {
                state.status = "failed";
            });

            // .addCase(fetchCreateLogin.pending, (state) => {
            //     state.status = "loading";
            // })
            // .addCase(fetchCreateLogin.fulfilled, (state, action) => {
            //     console.log("action.payload", action.payload);
            //     state.status = "success";
            //     state.verifyEmail = action.payload;
            // })
            // .addCase(fetchCreateLogin.rejected, (state) => {
            //     state.status = "failed";
            // });
    }
});

export default userSlice.reducer;

// export const selectUser = (state) => state?.user?.createUser;
// export const selectUserLogin = (state) => state?.user?.verifyEmail;