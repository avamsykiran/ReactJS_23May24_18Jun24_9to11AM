import { Component } from 'react';
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
                { id: 2, fullName: "Suseela", mobile: "9052224754", mailId: "suseela@gmail.com" },
                { id: 3, fullName: "Sagar", mobile: "9052224755", mailId: "sagar@gmail.com" },
                { id: 4, fullName: "Saradha", mobile: "9052224756", mailId: "saradha@gmail.com" },
                { id: 5, fullName: "Indhikaa", mobile: "9052224757", mailId: "indhikaa@gmail.com" }
            ],
            nextContactId: 6
        };
    }

    addContact = contact => {
        contact.id = this.state.nextContactId;
        this.setState({ contacts: [...this.state.contacts, contact], nextContactId: this.state.nextContactId + 1 });
    }

    updateContact = contact => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != contact.id ? c : { ...contact, isEditable: undefined }) });
    }

    deleteById = id => {
        this.setState({ contacts: this.state.contacts.filter(c => c.id != id) });
    }

    markEditable = id => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != id ? c : { ...c, isEditable: true }) });
    }

    unMarkEditable = id => {
        this.setState({ contacts: this.state.contacts.map(c => c.id != id ? c : { ...c, isEditable: undefined }) });
    }

    render() {
        return (
            <section className='container-fluid p-4'>
                <div className='col-sm-11 mx-auto m-2 p-4'>
                    <h3>Contacts List</h3>

                    <ContactsHeader />

                    <ContactForm save={this.addContact} />

                    {
                        this.state.contacts.map(c => (
                            c.isEditable ?
                                <ContactForm contact={c} key={c.id} save={this.updateContact} cancelEdit={this.unMarkEditable} /> :
                                <ContactRow contact={c} key={c.id} remove={this.deleteById} edit={this.markEditable} />
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default ContactsList;