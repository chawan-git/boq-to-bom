// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_WORK_REQUEST,
  INSERT_WORK_SUCCESS,
  INSERT_WORK_FAILURE,
  FIND_WORK_BY_ID_REQUEST,
  FIND_WORK_BY_ID_SUCCESS,
  FIND_WORK_BY_ID_FAILURE,
  FIND_ALL_WORKS_REQUEST,
  FIND_ALL_WORKS_SUCCESS,
  FIND_ALL_WORKS_FAILURE,
  FIND_WORK_BY_NAME_REQUEST,
  FIND_WORK_BY_NAME_SUCCESS,
  FIND_WORK_BY_NAME_FAILURE,
  UPDATE_WORK_REQUEST,
  UPDATE_WORK_SUCCESS,
  UPDATE_WORK_FAILURE,
  DELETE_WORK_REQUEST,
  DELETE_WORK_SUCCESS,
  DELETE_WORK_FAILURE,
  DELETE_WORK_PERMANENTLY_REQUEST,
  DELETE_WORK_PERMANENTLY_SUCCESS,
  DELETE_WORK_PERMANENTLY_FAILURE,
} from "./workTypes";

// This is the Redux workReducer initialState
const initialState = {
  insertWork: {
    loading: false,
    work: "",
    error: "",
  },
  findWorkById: {
    loading: false,
    work: "",
    error: "",
  },
  findWorkByName: {
    loading: false,
    work: "",
    error: "",
  },
  findAllWorks: {
    loading: false,
    work: "",
    error: "",
  },
  updateWork: {
    loading: false,
    work: "",
    error: "",
  },

  deleteWork: {
    loading: false,
    work: "",
    error: "",
  },
  deleteWorkPermanently: {
    loading: false,
    work: "",
    error: "",
  },
};

// WorkReducer

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_WORK_REQUEST:
      return {
        ...state,
        insertWork: {
          loading: true,
          work: "",
          error: "",
        },
      };
    case INSERT_WORK_SUCCESS:
      return {
        ...state,
        insertWork: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case INSERT_WORK_FAILURE:
      return {
        ...state,
        insertWork: {
          loading: false,
          work: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_WORK_BY_ID_REQUEST:
      return {
        ...state,
        findWorkById: {
          loading: true,
          work: "",
          error: "",
        },
      };
    case FIND_WORK_BY_ID_SUCCESS:
      return {
        ...state,
        findWorkById: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case FIND_WORK_BY_ID_FAILURE:
      return {
        ...state,
        findWorkById: {
          loading: false,
          work: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_WORK_BY_NAME_REQUEST:
      return {
        ...state,
        findWorkByName: {
          loading: true,
          work: "",
          error: "",
        },
      };
    case FIND_WORK_BY_NAME_SUCCESS:
      return {
        ...state,
        findWorkByName: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case FIND_WORK_BY_NAME_FAILURE:
      return {
        ...state,
        findWorkByName: {
          loading: false,
          work: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_WORKS_REQUEST:
      return {
        ...state,
        findAllWorks: {
          loading: true,
          works: [],
          error: "",
        },
      };
    case FIND_ALL_WORKS_SUCCESS:
      return {
        ...state,
        findAllWorks: {
          loading: false,
          works: action.payload,
          error: "",
        },
      };
    case FIND_ALL_WORKS_FAILURE:
      return {
        ...state,
        findAllWorks: {
          loading: false,
          works: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_WORK_REQUEST:
      return {
        ...state,
        updateWork: {
          loading: true,
          work: "",
          error: "",
        },
      };
    case UPDATE_WORK_SUCCESS:
      return {
        ...state,
        updateWork: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case UPDATE_WORK_FAILURE:
      return {
        ...state,
        updateWork: {
          loading: false,
          work: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_WORK_REQUEST:
      return {
        ...state,
        deleteWork: {
          loading: true,
          work: "",
          error: "",
        },
      };

    case DELETE_WORK_SUCCESS:
      return {
        ...state,
        findAllWorks: {
          loading: false,
          works: state.findAllWorks.works.filter(
            (work) => work.id !== action.payload.id
          ),
          error: "",
        },
        deleteWork: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case DELETE_WORK_FAILURE:
      return {
        ...state,
        deleteWork: {
          loading: false,
          work: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_WORK_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteWorkPermanently: {
          loading: true,
          work: "",
          error: "",
        },
      };
    case DELETE_WORK_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllWorks: {
          loading: false,
          works: state.findAllWorks.works.filter(
            (work) => work.id !== action.payload.id
          ),
          error: "",
        },
        deleteWorkPermanently: {
          loading: false,
          work: action.payload,
          error: "",
        },
      };
    case DELETE_WORK_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteWorkPermanently: {
          loading: false,
          work: "",
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
export default workReducer;
