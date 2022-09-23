import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {

    const contact1 = new Contact('Usuario 1', 'Usu1', 'usuario1@mail.com', false);
    const contact2 = new Contact('Usuario 2', 'Usu2', 'usuario2@mail.com', true);
    const contact3 = new Contact('Usuario 3', 'Usu3', 'usuario3@mail.com', false);

    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    function changeStatus(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>CONTACT LIST:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Lastname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map( (contact, index) => {
                                        return(
                                            <ContactComponent
                                                key={index}
                                                contact={contact}
                                                changeStatus={changeStatus}
                                                removeContact={removeContact}
                                            >
                                            </ContactComponent>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <ContactForm add={addContact}></ContactForm>
            </div>
        </div>
    );
}

export default ContactListComponent;
