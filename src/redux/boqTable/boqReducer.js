// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_BOQ_REQUEST,
  INSERT_BOQ_SUCCESS,
  INSERT_BOQ_FAILURE,
  FIND_BOQ_BY_ID_REQUEST,
  FIND_BOQ_BY_ID_SUCCESS,
  FIND_BOQ_BY_ID_FAILURE,
  FIND_BOQ_BY_BOQID_REQUEST,
  FIND_BOQ_BY_BOQID_SUCCESS,
  FIND_BOQ_BY_BOQID_FAILURE,
  FIND_ALL_BOQS_REQUEST,
  FIND_ALL_BOQS_SUCCESS,
  FIND_ALL_BOQS_FAILURE,
  UPDATE_BOQ_REQUEST,
  UPDATE_BOQ_SUCCESS,
  UPDATE_BOQ_FAILURE,
  DELETE_BOQ_REQUEST,
  DELETE_BOQ_SUCCESS,
  DELETE_BOQ_FAILURE,
  DELETE_BOQ_PERMANENTLY_REQUEST,
  DELETE_BOQ_PERMANENTLY_SUCCESS,
  DELETE_BOQ_PERMANENTLY_FAILURE,
} from "./boqTypes";
// This is the Redux boqReducer initialState
const initialState = {
  insertBoq: {
    loading: false,
    boq: "",
    error: "",
  },
  findBoqById: {
    loading: false,
    boq: "",
    error: "",
  },
  findBoqByBoqId: {
    loading: false,
    boq: "",
    error: "",
  },
  findAllBoqs: {
    loading: false,
    boqs: [],
    error: "",
  },
  updateBoq: {
    loading: false,
    boq: "",
    error: "",
  },
  deleteBoq: {
    loading: false,
    boq: "",
    error: "",
  },
  deleteBoqPermanently: {
    loading: false,
    boq: "",
    error: "",
  },
};

// BoqReducer
const boqReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_BOQ_REQUEST:
      return {
        ...state,
        insertBoq: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case INSERT_BOQ_SUCCESS:
      return {
        ...state,
        insertBoq: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };
    case INSERT_BOQ_FAILURE:
      return {
        ...state,
        insertBoq: {
          loading: false,
          boq: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_BOQ_BY_ID_REQUEST:
      return {
        ...state,
        viewBoqById: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case FIND_BOQ_BY_ID_SUCCESS:
      return {
        ...state,
        viewBoqById: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };
    case FIND_BOQ_BY_ID_FAILURE:
      return {
        ...state,
        viewBoqById: {
          loading: false,
          boq: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_BOQ_BY_BOQID_REQUEST:
      return {
        ...state,
        viewBoqByBoqId: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case FIND_BOQ_BY_BOQID_SUCCESS:
      return {
        ...state,
        viewBoqByBoqId: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };
    case FIND_BOQ_BY_BOQID_FAILURE:
      return {
        ...state,
        viewBoqByBoqId: {
          loading: false,
          boq: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_BOQS_REQUEST:
      return {
        ...state,
        findAllBoqs: {
          loading: true,
          boqs: [],
          error: "",
        },
      };
    case FIND_ALL_BOQS_SUCCESS:
      return {
        ...state,
        findAllBoqs: {
          loading: false,
          boqs: action.payload,
          error: "",
        },
      };
    case FIND_ALL_BOQS_FAILURE:
      return {
        ...state,
        findAllBoqs: {
          loading: false,
          boqs: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_BOQ_REQUEST:
      return {
        ...state,
        updateBoq: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case UPDATE_BOQ_SUCCESS:
      return {
        ...state,
        updateBoq: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };
    case UPDATE_BOQ_FAILURE:
      return {
        ...state,
        updateBoq: {
          loading: false,
          boq: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_BOQ_REQUEST:
      return {
        ...state,
        deleteBoq: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case DELETE_BOQ_SUCCESS:
      return {
        ...state,
        findAllBoqs: {
          loading: false,
          boqs: state.findAllBoqs.boqs.filter(
            (boq) => boq.boqId !== action.payload.boqId
          ),
          error: "",
        },
        deleteBoq: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };

    case DELETE_BOQ_FAILURE:
      return {
        ...state,
        deleteBoq: {
          loading: false,
          boq: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_BOQ_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteBoqPermanently: {
          loading: true,
          boq: "",
          error: "",
        },
      };
    case DELETE_BOQ_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllBoqs: {
          loading: false,
          boqs: state.findAllBoqs.boqs.filter(
            (boq) => boq.boqId !== action.payload.boqId
          ),
          error: "",
        },
        deleteBoqPermanently: {
          loading: false,
          boq: action.payload,
          error: "",
        },
      };

    case DELETE_BOQ_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteBoqPermanently: {
          loading: false,
          boq: null,
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
export default boqReducer;
