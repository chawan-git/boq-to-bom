// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_USER_REQUEST,
  INSERT_USER_SUCCESS,
  INSERT_USER_FAILURE,
  FIND_USER_BY_ID_REQUEST,
  FIND_USER_BY_ID_SUCCESS,
  FIND_USER_BY_ID_FAILURE,
  FIND_ALL_USERS_REQUEST,
  FIND_ALL_USERS_SUCCESS,
  FIND_ALL_USERS_FAILURE,
  FIND_ALL_USERS_NOT_DELETED_REQUEST,
  FIND_ALL_USERS_NOT_DELETED_SUCCESS,
  FIND_ALL_USERS_NOT_DELETED_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_PERMANENTLY_REQUEST,
  DELETE_USER_PERMANENTLY_SUCCESS,
  DELETE_USER_PERMANENTLY_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
} from "./userTypes";
// This is the Redux userReducer initialState
const initialState = {
  insertUser: {
    loading: false,
    user: "",
    error: "",
  },
  findUserById: {
    loading: false,
    user: "",
    error: "",
  },
  findAllUsers: {
    loading: false,
    users: [],
    error: "",
  },
  findAllUsersNotDeleted: {
    loading: false,
    users: [],
    error: "",
  },
  updateUser: {
    loading: false,
    user: "",
    error: "",
  },

  deleteUser: {
    loading: false,
    user: "",
    error: "",
  },
  deleteUserPermanently: {
    loading: false,
    user: "",
    error: "",
  },
  signIn: {
    loading: false,
    user: "",
    error: "",
  },
};

// UserReducer

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_USER_REQUEST:
      return {
        ...state,
        insertUser: {
          loading: true,
          user: "",
          error: "",
        },
      };
    case INSERT_USER_SUCCESS:
      return {
        ...state,
        insertUser: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case INSERT_USER_FAILURE:
      return {
        ...state,
        insertUser: {
          loading: false,
          user: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_USER_BY_ID_REQUEST:
      return {
        ...state,
        findUserById: {
          loading: true,
          user: "",
          error: "",
        },
      };
    case FIND_USER_BY_ID_SUCCESS:
      return {
        ...state,
        findUserById: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case FIND_USER_BY_ID_FAILURE:
      return {
        ...state,
        findUserById: {
          loading: false,
          user: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_USERS_REQUEST:
      return {
        ...state,
        findAllUsers: {
          loading: true,
          users: [],
          error: "",
        },
      };
    case FIND_ALL_USERS_SUCCESS:
      return {
        ...state,
        findAllUsers: {
          loading: false,
          users: action.payload,
          error: "",
        },
      };
    case FIND_ALL_USERS_FAILURE:
      return {
        ...state,
        findAllUsers: {
          loading: false,
          users: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
      case FIND_ALL_USERS_NOT_DELETED_REQUEST:
        return {
          ...state,
          findAllUsersNotDeleted: {
            loading: true,
            users: [],
            error: "",
          },
        };
      case FIND_ALL_USERS_NOT_DELETED_SUCCESS:
        return {
          ...state,
          findAllUsersNotDeleted: {
            loading: false,
            users: action.payload,
            error: "",
          },
        };
      case FIND_ALL_USERS_NOT_DELETED_FAILURE:
        return {
          ...state,
          findAllUsersNotDeleted: {
            loading: false,
            users: [],
            error: {
              message: action.payload.response
                ? action.payload.response.data
                : action.payload.message,
            },
          },
        };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updateUser: {
          loading: true,
          user: "",
          error: "",
        },
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUser: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUser: {
          loading: false,
          user: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        deleteUser: {
          loading: true,
          user: "",
          error: "",
        },
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        findAllUsers: {
          loading: false,
          users: state.findAllUsers.users.filter(
            (user) => user.id !== action.payload.id
          ),
          error: "",
        },
        deleteUser: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUser: {
          loading: false,
          user: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_USER_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteUserPermanently: {
          loading: true,
          user: "",
          error: "",
        },
      };
    case DELETE_USER_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllUsers: {
          loading: false,
          users: state.findAllUsers.users.filter(
            (user) => user.id !== action.payload.id
          ),
          error: "",
        },
        deleteUserPermanently: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case DELETE_USER_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteUserPermanently: {
          loading: false,
          user: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case SIGN_IN_USER_REQUEST:
      return {
        ...state,
        signIn: {
          loading: true,
          user: "",
          error: "",
        },
      };
    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          user: action.payload,
          error: "",
        },
      };
    case SIGN_IN_USER_FAILURE:
      return {
        ...state,
        signIn: {
          loading: false,
          user: "",
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
export default userReducer;
