// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_ITEM_REQUEST,
  INSERT_ITEM_SUCCESS,
  INSERT_ITEM_FAILURE,
  FIND_ITEM_BY_ID_REQUEST,
  FIND_ITEM_BY_ID_SUCCESS,
  FIND_ITEM_BY_ID_FAILURE,
  FIND_ALL_ITEMS_REQUEST,
  FIND_ALL_ITEMS_SUCCESS,
  FIND_ALL_ITEMS_FAILURE,
  FIND_ITEM_BY_NAME_REQUEST,
  FIND_ITEM_BY_NAME_SUCCESS,
  FIND_ITEM_BY_NAME_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_PERMANENTLY_REQUEST,
  DELETE_ITEM_PERMANENTLY_SUCCESS,
  DELETE_ITEM_PERMANENTLY_FAILURE,
} from "./itemTypes";
// This is the Redux itemReducer initialState
const initialState = {
  insertItem: {
    loading: false,
    item: "",
    error: "",
  },
  findItemById: {
    loading: false,
    item: "",
    error: "",
  },
  findItemByName: {
    loading: false,
    item: "",
    error: "",
  },
  findAllItems: {
    loading: false,
    item: "",
    error: "",
  },
  updateItem: {
    loading: false,
    item: "",
    error: "",
  },

  deleteItem: {
    loading: false,
    item: "",
    error: "",
  },
  deleteItemPermanently: {
    loading: false,
    item: "",
    error: "",
  },
};

// ItemReducer

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_ITEM_REQUEST:
      return {
        ...state,
        insertItem: {
          loading: true,
          item: "",
          error: "",
        },
      };
    case INSERT_ITEM_SUCCESS:
      return {
        ...state,
        insertItem: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case INSERT_ITEM_FAILURE:
      return {
        ...state,
        insertItem: {
          loading: false,
          item: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ITEM_BY_ID_REQUEST:
      return {
        ...state,
        findItemById: {
          loading: true,
          item: "",
          error: "",
        },
      };
    case FIND_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        findItemById: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case FIND_ITEM_BY_ID_FAILURE:
      return {
        ...state,
        findItemById: {
          loading: false,
          item: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ITEM_BY_NAME_REQUEST:
      return {
        ...state,
        findItemByName: {
          loading: true,
          item: "",
          error: "",
        },
      };
    case FIND_ITEM_BY_NAME_SUCCESS:
      return {
        ...state,
        findItemByName: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case FIND_ITEM_BY_NAME_FAILURE:
      return {
        ...state,
        findItemByName: {
          loading: false,
          item: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_ITEMS_REQUEST:
      return {
        ...state,
        findAllItems: {
          loading: true,
          items: [],
          error: "",
        },
      };
    case FIND_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        findAllItems: {
          loading: false,
          items: action.payload,
          error: "",
        },
      };
    case FIND_ALL_ITEMS_FAILURE:
      return {
        ...state,
        findAllItems: {
          loading: false,
          items: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_ITEM_REQUEST:
      return {
        ...state,
        updateItem: {
          loading: true,
          item: "",
          error: "",
        },
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        updateItem: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case UPDATE_ITEM_FAILURE:
      return {
        ...state,
        updateItem: {
          loading: false,
          item: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        deleteItem: {
          loading: true,
          item: "",
          error: "",
        },
      };

    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        findAllItems: {
          loading: false,
          items: state.findAllItems.items.filter(
            (item) => item.id !== action.payload.id
          ),
          error: "",
        },
        deleteItem: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        deleteItem: {
          loading: false,
          item: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_ITEM_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteItemPermanently: {
          loading: true,
          item: "",
          error: "",
        },
      };
    case DELETE_ITEM_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllItems: {
          loading: false,
          items: state.findAllItems.items.filter(
            (item) => item.id !== action.payload.id
          ),
          error: "",
        },
        deleteItemPermanently: {
          loading: false,
          item: action.payload,
          error: "",
        },
      };
    case DELETE_ITEM_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteItemPermanently: {
          loading: false,
          item: "",
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
export default itemReducer;
