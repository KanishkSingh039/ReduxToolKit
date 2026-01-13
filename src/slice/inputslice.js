import { createSlice } from "@reduxjs/toolkit"
import { countslice } from "./countslice";



export const text = {
    value: ''
}
export const inputslice = createSlice({
    name: 'input',
    initialState: text,
    reducers: {
        handleinput(state, action) {
            // let cpy = {...state };
            // cpy = {
            //     ...cpy,
            //     value: action.payload
            // }
            // state = cpy;
            state.value = action.payload;
            console.log(state.value, action);

        }
    }
})

export const { handleinput } = inputslice.actions;
export default inputslice.reducer