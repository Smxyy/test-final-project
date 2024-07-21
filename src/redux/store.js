import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./features/user/userSlice";
import skillSlice from "./features/skill/skillSlice";
import skillnamelevel from "./skillnamelevel/skillnamelevel";
import lessondetailSlice from "./features/lessondetail/lessondetailSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        skill: skillSlice,
        skillNameLevel : skillnamelevel,
        excersice : lessondetailSlice
    },
});