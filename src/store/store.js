import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slice/countslice"
import inputReducer from "../slice/inputslice"
export const store = configureStore({
        reducer: {
            counter: countReducer,
            input: inputReducer
        }
    })
    //configurestore is use to create store where all the slices were contained 
    // to provide this store all component we need to wrap the app component in the provider in the main file
    //we provide a name to each slice here and every slice stores in thier provided name by writing slice.name with Reducer like above