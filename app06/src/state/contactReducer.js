import { ADD_CONTACT, DEL_CONTACT, MARK_CONTACT_EDITABLE, UNMARK_CONTACT_EDITABLE, UPD_CONTACT } from "./contactActions";

const initialState = () => ({
    contacts: [
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "Suseela", mobile: "9052224754", mailId: "suseela@gmail.com" },
        { id: 3, fullName: "Sagar", mobile: "9052224755", mailId: "sagar@gmail.com" },
        { id: 4, fullName: "Saradha", mobile: "9052224756", mailId: "saradha@gmail.com" },
        { id: 5, fullName: "Indhikaa", mobile: "9052224757", mailId: "indhikaa@gmail.com" }
    ],
    nextContactId: 6
});

const contactReducer = (state = initialState(), action) => {
    let { contacts, nextContactId } = state;

    switch (action.type) {
        case ADD_CONTACT:
            contacts = [...contacts, { ...action.contact, id: nextContactId }];
            nextContactId = nextContactId + 1;
            break;
        case UPD_CONTACT:
            contacts = contacts.map(c => c.id === action.contact.id ? { ...action.contact, isEditable: undefined } : c);
            break;
        case DEL_CONTACT:
            contacts = contacts.filter(c => c.id !== action.id);
            break;
        case MARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: true } : c);
            break;
        case UNMARK_CONTACT_EDITABLE:
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: undefined } : c);
            break;
    }

    return { contacts, nextContactId };
};

export default contactReducer;