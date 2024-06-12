
//declare action types
export const ADD_CONTACT = "add contact";
export const UPD_CONTACT = "update contact";
export const DEL_CONTACT = "delete contact";
export const MARK_CONTACT_EDITABLE = "mark contact editable";
export const UNMARK_CONTACT_EDITABLE = "unmark contact editable";

//declare action creator method

export const createAddContactActon = contact => ({ type: ADD_CONTACT, contact });
export const createUpdateContactActon = contact => ({ type: UPD_CONTACT, contact });
export const createDeleteContactActon = id => ({ type: DEL_CONTACT, id });
export const createMarkContactEditableActon = id => ({ type: MARK_CONTACT_EDITABLE, id });
export const createUnMarkContactEditableActon = id => ({ type: UNMARK_CONTACT_EDITABLE, id });
