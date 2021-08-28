import React from 'react'
import style from './ContactList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact-actions';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={style.ContactListUl}>
        {contacts.map(({ id, name, number }) => (
            <li className={style.ContactListLi} key={id}>
                <p>{name}: 
                    <span>{number}</span>
                </p> 
                <button 
                    className={style.ContactBtnDel}
                    onClick={()=>onDeleteContact(id)}>Delete</button>  
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};


const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

// const mapStateToProps = (state) => {
//     const { filter, items } = state.contacts;
//     const newFilteredContacts = getFilteredContacts(items, filter);
//     return {
//         contacts: newFilteredContacts,
//     }  
// }
//составляем пропсы, происходит операция фильтров
const mapStateToProps = ({contacts: {items,filter}}) => ({
    contacts: getFilteredContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactActions.deleteContact(id)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
