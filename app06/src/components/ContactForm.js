import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAddContactActon, createUpdateContactActon, createUnMarkContactEditableActon } from '../state/contactActions';

const ContactForm = ({ contact }) => {

    let [id, setId] = useState(contact ? contact.id : 0);
    let [fullName, setFullName] = useState(contact ? contact.fullName : "");
    let [mobile, setMobile] = useState(contact ? contact.mobile : "");
    let [mailId, setMailId] = useState(contact ? contact.mailId : "");

    let isEditing = contact? contact.isEditable : false;

    const dispatch = useDispatch();

    const reset = () => {
        setId(0);
        setFullName("");
        setMobile("");
        setMailId("");
    }

    const saveBtnClicked = e => {
        if (isEditing) {
            dispatch(createUpdateContactActon({ id, fullName, mobile, mailId }))
        } else {
            dispatch(createAddContactActon({ id, fullName, mobile, mailId }))
            reset();
        }
    }

    const cancelBtnClicked = e => {
        if (isEditing) {
            dispatch(createUnMarkContactEditableActon(id));
        }else{
            reset();
        }
    }

    return (
        <form className='row border-bottom border-primary p-2'>
            <div className='col-1 text-end'>
                {id}
            </div>
            <div className='col'>
                <input type="text" value={fullName} className='form-control' placeholder='full name'
                    onChange={e => setFullName(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" value={mobile} className='form-control' placeholder='mobile number'
                    onChange={e => setMobile(e.target.value)} />
            </div>
            <div className='col-2'>
                <input type="text" value={mailId} className='form-control' placeholder='mail id'
                    onChange={e => setMailId(e.target.value)} />
            </div>
            <div className='col-2'>
                <button type="button" className='btn btn-sm btn-primary' onClick={saveBtnClicked}>
                    SAVE
                </button>
                <button type="button" className='btn btn-sm btn-danger ms-1' onClick={cancelBtnClicked}>
                    CANCEL
                </button>
            </div>
        </form>
    );
}

export default ContactForm;