import { createSlice } from "@reduxjs/toolkit"



export const text = {
    value: '',
    Text: []
}
let c = 0;
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

        },
        handleprint(state, action) {
            let cpy = [...state.Text];
            c += 1;
            cpy.push({
                com: action.payload,
                id: c
            });
            state.Text = cpy;
        },
        handledeleting(state, action) {
            let cpy = [...state.Text];
            cpy = cpy.filter((item) => item.id != action.payload);
            state.Text = cpy;
        }
    }
})

export const { handleinput, handleprint, handledeleting } = inputslice.actions;
export default inputslice.reducer