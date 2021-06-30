// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_SUB_WORK_REQUEST,
  INSERT_SUB_WORK_SUCCESS,
  INSERT_SUB_WORK_FAILURE,
  FIND_SUB_WORK_BY_ID_REQUEST,
  FIND_SUB_WORK_BY_ID_SUCCESS,
  FIND_SUB_WORK_BY_ID_FAILURE,
  FIND_ALL_SUB_WORKS_REQUEST,
  FIND_ALL_SUB_WORKS_SUCCESS,
  FIND_ALL_SUB_WORKS_FAILURE,
  FIND_SUB_WORK_BY_NAME_REQUEST,
  FIND_SUB_WORK_BY_NAME_SUCCESS,
  FIND_SUB_WORK_BY_NAME_FAILURE,
  UPDATE_SUB_WORK_REQUEST,
  UPDATE_SUB_WORK_SUCCESS,
  UPDATE_SUB_WORK_FAILURE,
  DELETE_SUB_WORK_REQUEST,
  DELETE_SUB_WORK_SUCCESS,
  DELETE_SUB_WORK_FAILURE,
  DELETE_SUB_WORK_PERMANENTLY_REQUEST,
  DELETE_SUB_WORK_PERMANENTLY_SUCCESS,
  DELETE_SUB_WORK_PERMANENTLY_FAILURE,
} from "./subWorkTypes";

// This is the Redux subWorkReducer initialState
const initialState = {
  insertSubWork: {
    loading: false,
    subWork: "",
    error: "",
  },
  findSubWorkById: {
    loading: false,
    subWork: "",
    error: "",
  },
  findSubWorkByName: {
    loading: false,
    subWork: "",
    error: "",
  },
  findAllSubWorks: {
    loading: false,
    subWorks: "",
    error: "",
  },
  updateSubWork: {
    loading: false,
    subWork: "",
    error: "",
  },
  deleteSubWork: {
    loading: false,
    subWork: "",
    error: "",
  },
};

// SubWorkReducer
const subWorkReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_SUB_WORK_REQUEST:
      return {
        ...state,
        insertSubWork: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case INSERT_SUB_WORK_SUCCESS:
      return {
        ...state,
        insertSubWork: {
          loading: false,
          subWork: action.payload,
          error: "",
        },
      };
    case INSERT_SUB_WORK_FAILURE:
      return {
        ...state,
        insertSubWork: {
          loading: false,
          subWork: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_SUB_WORK_BY_ID_REQUEST:
      return {
        ...state,
        findSubWorkById: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case FIND_SUB_WORK_BY_ID_SUCCESS:
      return {
        ...state,
        findSubWorkById: {
          loading: false,
          subWork: action.payload,
          error: "",
        },
      };
    case FIND_SUB_WORK_BY_ID_FAILURE:
      return {
        ...state,
        findSubWorkById: {
          loading: false,
          subWork: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_SUB_WORK_BY_NAME_REQUEST:
      return {
        ...state,
        findSubWorkByName: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case FIND_SUB_WORK_BY_NAME_SUCCESS:
      return {
        ...state,
        findSubWorkByName: {
          loading: false,
          subWorks: action.payload,
          error: "",
        },
      };
    case FIND_SUB_WORK_BY_NAME_FAILURE:
      return {
        ...state,
        findSubWorkByName: {
          loading: false,
          subWorks: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_SUB_WORKS_REQUEST:
      return {
        ...state,
        viewAllSubWorks: {
          loading: true,
          subWorks: [],
          error: "",
        },
      };
    case FIND_ALL_SUB_WORKS_SUCCESS:
      return {
        ...state,
        viewAllSubWorks: {
          loading: false,
          subWorks: action.payload,
          error: "",
        },
      };
    case FIND_ALL_SUB_WORKS_FAILURE:
      return {
        ...state,
        viewAllSubWorks: {
          loading: false,
          subWorks: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case UPDATE_SUB_WORK_REQUEST:
      return {
        ...state,
        updateSubWork: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case UPDATE_SUB_WORK_SUCCESS:
      return {
        ...state,
        updateSubWork: {
          loading: false,
          subWork: action.payload,
          error: "",
        },
      };
    case UPDATE_SUB_WORK_FAILURE:
      return {
        ...state,
        updateSubWork: {
          loading: false,
          subWork: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case DELETE_SUB_WORK_REQUEST:
      return {
        ...state,
        deleteSubWork: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case DELETE_SUB_WORK_SUCCESS:
      return {
        ...state,
        viewAllSubWorks: {
          loading: false,
          subWorks: state.viewAllSubWorks.subWorks.filter(
            (subWork) => subWork.id !== action.payload.id
          ),
          error: "",
        },
        deleteSubWork: {
          loading: false,
          subWork: "",
          error: "",
        },
      };

    case DELETE_SUB_WORK_FAILURE:
      return {
        ...state,
        deleteSubWork: {
          loading: false,
          subWork: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_SUB_WORK_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteSubWorkPermanently: {
          loading: true,
          subWork: "",
          error: "",
        },
      };
    case DELETE_SUB_WORK_PERMANENTLY_SUCCESS:
      return {
        ...state,
        viewAllSubWorks: {
          loading: false,
          subWorks: state.viewAllSubWorks.subWorks.filter(
            (subWork) => subWork.id !== action.payload.id
          ),
          error: "",
        },
        deleteSubWorkPermanently: {
          loading: false,
          subWork: "",
          error: "",
        },
      };

    case DELETE_SUB_WORK_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteSubWorkPermanently: {
          loading: false,
          subWork: "",
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
export default subWorkReducer;
