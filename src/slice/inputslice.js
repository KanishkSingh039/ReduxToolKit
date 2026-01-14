import { createSlice } from "@reduxjs/toolkit"



export const text = {
    value: '',
    Text: [],
    edittext: {},
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
        },
        handleediting(status, action) {
            status.edittext = action.payload;
            console.log(status.edittext);
            let index = status.Text.findIndex((item) => item.id === status.edittext.id);
            console.log(index);

            if (index !== -1) {
                // status.Text[index] = {
                //         ...status.Text[index],
                //         com: status.edittext.current
                //     }
                status.Text[index].com = status.edittext.current;
            }
            // console.log(status.Text[index]);
            status.edittext = {};
        }
    }
})

export const { handleinput, handleprint, handledeleting, handleediting } = inputslice.actions;
export default inputslice.reducer