import contactTypes from "./contact-types";
import { v4 as uuidv4 } from "uuid";

const addContact = ( name, number ) => ({
    type: contactTypes.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
        }
    }
)

const deleteContact = contactId => ({
    type: contactTypes.DELETE,
    payload: contactId,
})

const filterContact = value => ({
    type: contactTypes.FILTER,
    payload: value,
})

const contactsChange = {
    addContact,
    deleteContact,
    filterContact
}

export default contactsChange ;
