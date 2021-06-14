// Author: Ashutosh Rao Chawan & Suggala Manasvi
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
// This is the Redux contactReducer initialState
const initialState = {
  insertContact: {
    loading: false,
    contact: "",
    error: "",
  },
  findContactById: {
    loading: false,
    contact: "",
    error: "",
  },
  findAllContacts: {
    loading: false,
    contacts: [],
    error: "",
  },
  updateContact: {
    loading: false,
    contact: "",
    error: "",
  },
  deleteContact: {
    loading: false,
    contact: "",
    error: "",
  },
  deleteContactPermanently: {
    loading: false,
    contact: "",
    error: "",
  },
};

// ContactReducer
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_CONTACT_REQUEST:
      return {
        ...state,
        insertContact: {
          loading: true,
          contact: "",
          error: "",
        },
      };
    case INSERT_CONTACT_SUCCESS:
      return {
        ...state,
        insertContact: {
          loading: false,
          contact: action.payload,
          error: "",
        },
      };
    case INSERT_CONTACT_FAILURE:
      return {
        ...state,
        insertContact: {
          loading: false,
          contact: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_CONTACT_BY_ID_REQUEST:
      return {
        ...state,
        findContactById: {
          loading: true,
          contact: "",
          error: "",
        },
      };
    case FIND_CONTACT_BY_ID_SUCCESS:
      return {
        ...state,
        findContactById: {
          loading: false,
          contact: action.payload,
          error: "",
        },
      };
    case FIND_CONTACT_BY_ID_FAILURE:
      return {
        ...state,
        findContactById: {
          loading: false,
          contact: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_CONTACTS_REQUEST:
      return {
        ...state,
        findAllContacts: {
          loading: true,
          contacts: [],
          error: "",
        },
      };
    case FIND_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        findAllContacts: {
          loading: false,
          contacts: action.payload,
          error: "",
        },
      };
    case FIND_ALL_CONTACTS_FAILURE:
      return {
        ...state,
        findAllContacts: {
          loading: false,
          contacts: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_CONTACT_REQUEST:
      return {
        ...state,
        updateContact: {
          loading: true,
          contact: "",
          error: "",
        },
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        updateContact: {
          loading: false,
          contact: action.payload,
          error: "",
        },
      };
    case UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        updateContact: {
          loading: false,
          contact: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        deleteContact: {
          loading: true,
          contact: "",
          error: "",
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        findAllContacts: {
          loading: false,
          contacts: state.findAllContacts.contacts.filter(
            (contact) => contact.id !== action.payload.id
          ),
          error: "",
        },
        deleteContact: {
          loading: false,
          contact: "",
          error: "",
        },
      };

    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        deleteContact: {
          loading: false,
          contact: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case DELETE_CONTACT_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteContactPermanently: {
          loading: true,
          contact: "",
          error: "",
        },
      };
    case DELETE_CONTACT_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllContacts: {
          loading: false,
          contacts: state.findAllContacts.contacts.filter(
            (contact) => contact.id !== action.payload.id
          ),
          error: "",
        },
        deleteContactPermanently: {
          loading: false,
          contact: "",
          error: "",
        },
      };

    case DELETE_CONTACT_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteContactPermanently: {
          loading: false,
          contact: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    default:
      return state;
  }
};
export default contactReducer;
