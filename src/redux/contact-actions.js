// import contactTypes from "./contact-types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add',  ( name, number ) => {
    return {
        payload: {
        id: uuidv4(),
        name,
        number,
        }
    }
})

const deleteContact = createAction('contact/delete');

const filterContact = createAction('contact/filter');

const contactsChange = {
    addContact,
    deleteContact,
    filterContact
}

export default contactsChange;

// const addContact = ( name, number ) => ({
//     type: contactTypes.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//         }
//     }
// )

// const deleteContact = contactId => ({
//     type: contactTypes.DELETE,
//     payload: contactId,
// })

// const filterContact = value => ({
//     type: contactTypes.FILTER,
//     payload: value,
// })
