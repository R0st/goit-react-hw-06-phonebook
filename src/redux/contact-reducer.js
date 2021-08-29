import { combineReducers } from "redux";
// import contactTypes from "./contact-types";
import { createReducer } from '@reduxjs/toolkit';
import actionsAll from './contact-actions'

const items = createReducer([], {
    [actionsAll.addContact]: (state, {payload}) =>
        [...state, payload],
    [actionsAll.deleteContact]: (state, {payload}) =>
        state.filter(({ id }) => id !== payload),        
})

const filter = createReducer('', {
    [actionsAll.filterContact]: (_, {payload}) => payload,   
})

export default combineReducers({
    items,
    filter,
})

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case contactTypes.ADD:
//             return [...state, payload];
//         case contactTypes.DELETE:
//             return state.filter(({ id }) => id !== payload);
//         default:
//             return state;
//     }
// }

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'contact/filter':
//             return payload;
//         default:
//             return state;
//     }
// }