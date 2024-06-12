import { useSelector } from 'react-redux'; 
import ContactsHeader from './ContactsHeader';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const ContactsList = () => {

    let contacts = useSelector(state => state.contacts);

    return (
        <section className='container-fluid p-4'>
            <div className='col-sm-11 mx-auto m-2 p-4'>
                <h3>Contacts List</h3>
                <ContactsHeader />
                <ContactForm />
                {contacts.map(c => (c.isEditable ? <ContactForm contact={c} key={c.id} /> : <ContactRow contact={c} key={c.id} />))}
            </div>
        </section>
    );
}

export default ContactsList;