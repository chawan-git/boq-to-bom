// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_CONTACT_REQUEST,
  INSERT_CONTACT_SUCCESS,
  INSERT_CONTACT_FAILURE,
  FIND_CONTACT_BY_ID_REQUEST,
  FIND_CONTACT_BY_ID_SUCCESS,
  FIND_CONTACT_BY_ID_FAILURE,
  FIND_ALL_CONTACTS_REQUEST,
  FIND_ALL_CONTACTS_SUCCESS,
  FIND_ALL_CONTACTS_FAILURE,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_PERMANENTLY_REQUEST,
  DELETE_CONTACT_PERMANENTLY_SUCCESS,
  DELETE_CONTACT_PERMANENTLY_FAILURE,
} from "./contactTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert contacts to the database through the springBoot API
export const insertContact = (contact) => {
  return async (dispatch) => {
    await dispatch(insertContactRequest());
    await axios
      .post(API_URL + "/contact/insertContact", contact)
      .then((response) => {
        const contact = response.data;
        dispatch(insertContactSuccess(contact));
      })
      .catch((error) => {
        dispatch(insertContactFailure(error));
      });
  };
};

// Method used to find a single contact based on ID
export const findContactById = (id) => {
  return async (dispatch) => {
    await dispatch(findContactByIdRequest());
    await axios
      .get(API_URL + "/contact/findContactById/" + id)
      .then((response) => {
        // response.data is the users
        const contact = response.data;
        dispatch(findContactByIdSuccess(contact));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findContactByIdFailure(error));
      });
  };
};

// Method used to find all the contacts from the database using the SpringBoot API
export const findAllContacts = () => {
  return async (dispatch) => {
    await dispatch(findAllContactsRequest());
    await axios
      .get(API_URL + "/contacts/findAllContacts")
      .then((response) => {
        // response.data is the users
        const contacts = response.data;
        dispatch(findAllContactsSuccess(contacts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllContactsFailure(error));
      });
  };
};

// Method used to update the contact details in the database through the springBoot API
export const updateContact = (contact) => {
  return async (dispatch) => {
    await dispatch(updateContactRequest());
    await axios
      .put(API_URL + "/contact/updateContact", contact)
      .then((response) => {
        const contact = response.data;
        dispatch(updateContactSuccess(contact));
      })
      .catch((error) => {
        dispatch(updateContactFailure(error));
      });
  };
};

// Method used to delete a contact from the database through the SpringBoot API
export const deleteContact = (contact) => {
  return async (dispatch) => {
    await dispatch(deleteContactRequest());
    await axios
      .delete(API_URL + "/contact/deleteContact", contact)
      .then((response) => {
        const contact = response.data;
        dispatch(deleteContactSuccess(contact));
      })
      .catch((error) => {
        dispatch(deleteContactFailure(error));
      });
  };
};

// Method used to delete a contact from the database through the SpringBoot API
export const deleteContactPermanently = (contact) => {
  return async (dispatch) => {
    await dispatch(deleteContactPermanentlyRequest());
    await axios
      .delete(API_URL + "/contact/deleteContactPermanently", contact)
      .then((response) => {
        const contact = response.data;
        dispatch(deleteContactPermanentlySuccess(contact));
      })
      .catch((error) => {
        dispatch(deleteContactPermanentlyFailure(error));
      });
  };
};

export const insertContactRequest = () => {
  return {
    type: INSERT_CONTACT_REQUEST,
  };
};

export const insertContactSuccess = (contact) => {
  return {
    type: INSERT_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const insertContactFailure = (error) => {
  return {
    type: INSERT_CONTACT_FAILURE,
    payload: error,
  };
};

export const findContactByIdRequest = () => {
  return {
    type: FIND_CONTACT_BY_ID_REQUEST,
  };
};

export const findContactByIdSuccess = (contact) => {
  return {
    type: FIND_CONTACT_BY_ID_SUCCESS,
    payload: contact,
  };
};

export const findContactByIdFailure = (error) => {
  return {
    type: FIND_CONTACT_BY_ID_FAILURE,
    payload: error,
  };
};

export const findAllContactsRequest = () => {
  return {
    type: FIND_ALL_CONTACTS_REQUEST,
  };
};

export const findAllContactsSuccess = (contact) => {
  return {
    type: FIND_ALL_CONTACTS_SUCCESS,
    payload: contact,
  };
};

export const findAllContactsFailure = (error) => {
  return {
    type: FIND_ALL_CONTACTS_FAILURE,
    payload: error,
  };
};

export const updateContactRequest = () => {
  return {
    type: UPDATE_CONTACT_REQUEST,
  };
};

export const updateContactSuccess = (contact) => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const updateContactFailure = (error) => {
  return {
    type: UPDATE_CONTACT_FAILURE,
    payload: error,
  };
};

export const deleteContactRequest = () => {
  return {
    type: DELETE_CONTACT_REQUEST,
  };
};

export const deleteContactSuccess = (contact) => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: contact,
  };
};

export const deleteContactFailure = (error) => {
  return {
    type: DELETE_CONTACT_FAILURE,
    payload: error,
  };
};

export const deleteContactPermanentlyRequest = () => {
  return {
    type: DELETE_CONTACT_PERMANENTLY_REQUEST,
  };
};

export const deleteContactPermanentlySuccess = (contact) => {
  return {
    type: DELETE_CONTACT_PERMANENTLY_SUCCESS,
    payload: contact,
  };
};

export const deleteContactPermanentlyFailure = (error) => {
  return {
    type: DELETE_CONTACT_PERMANENTLY_FAILURE,
    payload: error,
  };
};
