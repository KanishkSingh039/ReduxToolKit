import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slice/countslice"
import inputReducer from "../slice/inputslice"
export const store = configureStore({
    reducer: {
        counter: countReducer,
        input: inputReducer
    }
})