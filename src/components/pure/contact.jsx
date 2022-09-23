import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact, changeStatus, removeContact}) => {

    function contactStatusIcon() {
        if (contact.conected) {
            return (<i className='bi-toggle-on' onClick={() => changeStatus(contact)} style={ {color: 'green', cursor: 'pointer'} }></i>);
        } else {
            return (<i className='bi-toggle-off' onClick={() => changeStatus(contact)} style={ {color: 'grey', cursor: 'pointer'} }></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.lastName }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.email }</span>
            </td>
            <td className='align-middle'>
                {
                    contact.conected
                    ?
                    (
                        <h6 className='mb-0'>
                            <span className='badge bg-success'>Online</span>
                        </h6>
                    )
                    :
                    (
                        <h6 className='mb-0'>
                            <span className='badge bg-danger'>Offline</span>
                        </h6>
                    )
                }
            </td>
            <td className='align-middle'>
                { contactStatusIcon() }
                <i className='bi-trash' onClick={() => removeContact(contact)} style={ {color: 'tomato', cursor: 'pointer'} }></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    changeStatus: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired,
};

export default ContactComponent;
