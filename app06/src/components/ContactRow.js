import { useDispatch } from 'react-redux';
import { createDeleteContactActon,createMarkContactEditableActon } from '../state/contactActions';

const ContactRow = ({ contact }) => {

    const dispatch = useDispatch();
    const remove = id => dispatch(createDeleteContactActon(id));
    const edit = id => dispatch(createMarkContactEditableActon(id));

    return (
        <div className='row border-bottom border-primary p-2'>
            <div className='col-1 text-end'>{contact.id}</div>
            <div className='col'>{contact.fullName}</div>
            <div className='col-2 text-center'>{contact.mobile}</div>
            <div className='col-2 text-center'>{contact.mailId}</div>
            <div className='col-2'>
                <button type="button" className='btn btn-sm btn-secondary me-1' onClick={event => edit(contact.id)}>
                    EDIt
                </button>
                <button type="button" className='btn btn-sm btn-danger' onClick={event => remove(contact.id)}>
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default ContactRow;