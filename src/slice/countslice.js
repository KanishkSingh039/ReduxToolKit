import { createSlice } from "@reduxjs/toolkit"


const value = {
    countvalue: 0
}
export const countslice = createSlice({
    name: 'count',
    initialState: value,
    reducers: {
        handlecount(state) {
            state.countvalue += 1;
        }
    }
})
export const { handlecount } = countslice.actions;
export default countslice.reducer