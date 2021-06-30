// Author: Ashutosh Rao Chawan & Suggala Manasvi

import {
  INSERT_GST_REQUEST,
  INSERT_GST_SUCCESS,
  INSERT_GST_FAILURE,
  FIND_GST_BY_ID_REQUEST,
  FIND_GST_BY_ID_SUCCESS,
  FIND_GST_BY_ID_FAILURE,
  FIND_ALL_GST_REQUEST,
  FIND_ALL_GST_SUCCESS,
  FIND_ALL_GST_FAILURE,
  UPDATE_GST_REQUEST,
  UPDATE_GST_SUCCESS,
  UPDATE_GST_FAILURE,
  DELETE_GST_REQUEST,
  DELETE_GST_SUCCESS,
  DELETE_GST_FAILURE,
  DELETE_GST_PERMANENTLY_REQUEST,
  DELETE_GST_PERMANENTLY_SUCCESS,
  DELETE_GST_PERMANENTLY_FAILURE,
} from "./gstTypes";
// This is the Redux gstReducer initialState
const initialState = {
  insertGst: {
    loading: false,
    gst: "",
    error: "",
  },
  findGstById: {
    loading: false,
    gst: "",
    error: "",
  },
  findAllGst: {
    loading: false,
    gst: "",
    error: "",
  },
  updateGst: {
    loading: false,
    gst: "",
    error: "",
  },
  deleteGst: {
    loading: false,
    gst: "",
    error: "",
  },
  deleteGstPermanently: {
    loading: false,
    gst: "",
    error: "",
  },
};

// GstReducer
const gstReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_GST_REQUEST:
      return {
        ...state,
        insertGst: {
          loading: true,
          gst: "",
          error: "",
        },
      };
    case INSERT_GST_SUCCESS:
      return {
        ...state,
        insertGst: {
          loading: false,
          gst: action.payload,
          error: "",
        },
      };
    case INSERT_GST_FAILURE:
      return {
        ...state,
        insertGst: {
          loading: false,
          gst: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_GST_BY_ID_REQUEST:
      return {
        ...state,
        findGstById: {
          loading: true,
          gst: "",
          error: "",
        },
      };
    case FIND_GST_BY_ID_SUCCESS:
      return {
        ...state,
        findGstById: {
          loading: false,
          gst: action.payload,
          error: "",
        },
      };
    case FIND_GST_BY_ID_FAILURE:
      return {
        ...state,
        findGstById: {
          loading: false,
          gst: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_GST_REQUEST:
      return {
        ...state,
        findAllGst: {
          loading: true,
          gsts: [],
          error: "",
        },
      };
    case FIND_ALL_GST_SUCCESS:
      return {
        ...state,
        findAllGst: {
          loading: false,
          gsts: action.payload,
          error: "",
        },
      };
    case FIND_ALL_GST_FAILURE:
      return {
        ...state,
        findAllGst: {
          loading: false,
          gsts: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_GST_REQUEST:
      return {
        ...state,
        updateGst: {
          loading: true,
          gst: "",
          error: "",
        },
      };
    case UPDATE_GST_SUCCESS:
      return {
        ...state,
        updateGst: {
          loading: false,
          gst: action.payload,
          error: "",
        },
      };
    case UPDATE_GST_FAILURE:
      return {
        ...state,
        updateGst: {
          loading: false,
          gst: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_GST_REQUEST:
      return {
        ...state,
        deleteGst: {
          loading: true,
          gst: "",
          error: "",
        },
      };
    case DELETE_GST_SUCCESS:
      return {
        ...state,
        findAllGst: {
          loading: false,
          gsts: state.findAllGst.gsts.filter(
            (gst) => gst.id !== action.payload.id
          ),
          error: "",
        },
        deleteGst: {
          loading: false,
          gst: "",
          error: "",
        },
      };

    case DELETE_GST_FAILURE:
      return {
        ...state,
        deleteGst: {
          loading: false,
          gst: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_GST_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteGst: {
          loading: true,
          gst: "",
          error: "",
        },
      };
    case DELETE_GST_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllGst: {
          loading: false,
          gsts: state.findAllGst.gsts.filter(
            (gst) => gst.id !== action.payload.id
          ),
          error: "",
        },
        deleteGst: {
          loading: false,
          gst: "",
          error: "",
        },
      };

    case DELETE_GST_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteGst: {
          loading: false,
          gst: "",
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
export default gstReducer;
