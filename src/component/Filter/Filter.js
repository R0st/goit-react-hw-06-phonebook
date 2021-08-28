import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact-actions';

const Filter = ({ value, onChange }) => (
    
    <label>
          Find contacts by name
          <input 
            type="text" 
            value={value}
            onChange={onChange}/>
        </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(
        contactActions.filterContact(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


