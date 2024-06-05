import { Component } from 'react';

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
            ]
        };
    }

    addContact = contact => {
        this.setState({contacts: [...this.state.contacts,contact] });
    }

    updateContact = contact => {
        this.setState({contacts: this.state.contacts.map( c => c.id!=contact.id?c:contact ) });
    }

    deleteById = id => {
        this.setState({contacts: this.state.contacts.filter( c => c.id!=id )});
    }

    render() {
        return (
            <section className='container-fluid p-4'>
                <div className='col-sm-11 mx-auto m-2 p-4'>
                    <h3>Contacts List</h3>

                    <div className='row border-bottom border-danger text-center fw-bold p-2'>
                        <div className='col-1'>Contact#</div>
                        <div className='col'>Full Name</div>
                        <div className='col-2'>Mobile</div>
                        <div className='col-2'>Mail Id</div>
                        <div className='col-2'>Action</div>
                    </div>

                    {
                        this.state.contacts.map(contact => (
                            <div className='row border-bottom border-primary p-2' key={contact.id}>
                                <div className='col-1 text-end'>{contact.id}</div>
                                <div className='col'>{contact.fullName}</div>
                                <div className='col-2 text-center'>{contact.mobile}</div>
                                <div className='col-2 text-center'>{contact.mailId}</div>
                                <div className='col-2'>
                                    <button type="button" 
                                        className='btn btn-sm btn-danger' 
                                        onClick={ event => this.deleteById(contact.id)}>
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default ContactsList;