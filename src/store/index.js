import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialstate = { counter: 0, showToggle: true }

createSlice({
    name: "counter",
    initialstate,
    increment(state) {
        state++
    },
    decrement(state) {
        state--
    },
    incrementby(state, action) {
        state.counter = state + action.amount
    },
    toggle(state) {
        state.showToggle = !state.showToggle
    }
})

export const counterAction = createSlice.action;
const store = configureStore({
    reducer: createSlice.reducer
})

// const countReducer = (state = initialstate, action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             counter: state.counter + 1,
//             showToggle: state.showToggle
//         }

//     }
//     if (action.type === "INCREMENTBY") {
//         return {
//             counter: state.counter + action.amount,
//             showToggle: state.showToggle
//         }

//     }
//     if (action.type === "DECREMENT") {
//         return {
//             counter: state.counter - 1,
//             showToggle: state.showToggle
//         }

//     }
//     if (action.type === "Toggle") {
//         return {
//             showToggle: !state.showToggle,
//             counter: state.counter

//         }

//     }
//     return state;
// }

// const store = createStore(countReducer)

export default store;