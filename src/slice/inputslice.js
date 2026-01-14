import { createSlice } from "@reduxjs/toolkit"



export const text = {
    value: '',
    Text: [],
    edittext: {},
}
let c = 0;
//createslice uses to create slice , slice is like a perticular place for task performance for perticular function like this slice is uses for inputing text
// it contains object having properties like name,initialstate,reducers
// name is for naming and inistate constains the state and reducer contains all functions and each function are provided with state and action ,if you want to use it can use it
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
//slicename.actions create a action function which creates the object containg with payload for each functions in reducer, which we provide as action in reducer, and it also creates the type in that object only for each functions
// ACTION FUNCTION**** 
// inputSlice.actions = {
//   handleinput: function (payload) {
//     return {
//       type: "input/handleinput",
//       payload: payload,
//     }
//   }
// }
//type named as slice.name/name of function
export default inputslice.reducer
    //slicename.reducer creates the switch case which depends on the type which provided in action function 
    // basicaly reducer is an function caintaing switch case, when we call dispatch it send the function through which we get the access of type and decides which function should be performed 


// reducerfunction containing the switch case****
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "input/handleinput":
//       return { ...state, value: action.payload }
//     default:
//       return state
//   }
// }
// above is the reducer function containg the switch case