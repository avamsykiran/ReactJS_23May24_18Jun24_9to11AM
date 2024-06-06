import { useState } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const ContactsList = () => {
    let [contacts, setContacts] = useState([
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "Suseela", mobile: "9052224754", mailId: "suseela@gmail.com" },
        { id: 3, fullName: "Sagar", mobile: "9052224755", mailId: "sagar@gmail.com" },
        { id: 4, fullName: "Saradha", mobile: "9052224756", mailId: "saradha@gmail.com" },
        { id: 5, fullName: "Indhikaa", mobile: "9052224757", mailId: "indhikaa@gmail.com" }
    ]);

    let [nextContactId, setNextContactId] = useState(6);

    const addContact = contact => {
        contact.id = nextContactId;
        setContacts([...contacts, contact]);
        setNextContactId(nextContactId + 1);
    }

    const updateContact = contact => {
        setContacts(contacts.map(c => c.id != contact.id ? c : { ...contact, isEditable: undefined }));
    }

    const deleteById = id => {
        setContacts(contacts.filter(c => c.id != id));
    }

    const markEditable = id => {
        setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: true }));
    }

    const unMarkEditable = id => {
        setContacts(contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }));
    }

    return (
        <section className='container-fluid p-4'>
            <div className='col-sm-11 mx-auto m-2 p-4'>
                <h3>Contacts List</h3>

                <ContactsHeader />

                <ContactForm save={addContact} />

                {
                    contacts.map(c => (
                        c.isEditable ?
                            <ContactForm contact={c} key={c.id} save={updateContact} cancelEdit={unMarkEditable} /> :
                            <ContactRow contact={c} key={c.id} remove={deleteById} edit={markEditable} />
                    ))
                }
            </div>
        </section>
    );
}

export default ContactsList;