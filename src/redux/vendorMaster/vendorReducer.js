// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_VENDOR_REQUEST,
  INSERT_VENDOR_SUCCESS,
  INSERT_VENDOR_FAILURE,
  FIND_VENDOR_BY_ID_REQUEST,
  FIND_VENDOR_BY_ID_SUCCESS,
  FIND_VENDOR_BY_ID_FAILURE,
  FIND_ALL_VENDORS_REQUEST,
  FIND_ALL_VENDORS_SUCCESS,
  FIND_ALL_VENDORS_FAILURE,
  UPDATE_VENDOR_REQUEST,
  UPDATE_VENDOR_SUCCESS,
  UPDATE_VENDOR_FAILURE,
  DELETE_VENDOR_REQUEST,
  DELETE_VENDOR_SUCCESS,
  DELETE_VENDOR_FAILURE,
  DELETE_VENDOR_PERMANENTLY_REQUEST,
  DELETE_VENDOR_PERMANENTLY_SUCCESS,
  DELETE_VENDOR_PERMANENTLY_FAILURE,
} from "./vendorTypes";
// This is the Redux vendorReducer initialState
const initialState = {
  insertVendor: {
    loading: false,
    vendor: "",
    error: "",
  },
  findVendorById: {
    loading: false,
    vendor: "",
    error: "",
  },

  findAllVendors: {
    loading: false,
    vendor: "",
    error: "",
  },
  updateVendor: {
    loading: false,
    vendor: "",
    error: "",
  },

  deleteVendor: {
    loading: false,
    vendor: "",
    error: "",
  },
  deleteVendorPermanently: {
    loading: false,
    vendor: "",
    error: "",
  },
};

// VendorReducer

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_VENDOR_REQUEST:
      return {
        ...state,
        insertVendor: {
          loading: true,
          vendor: "",
          error: "",
        },
      };
    case INSERT_VENDOR_SUCCESS:
      return {
        ...state,
        insertVendor: {
          loading: false,
          vendor: action.payload,
          error: "",
        },
      };
    case INSERT_VENDOR_FAILURE:
      return {
        ...state,
        insertVendor: {
          loading: false,
          vendor: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_VENDOR_BY_ID_REQUEST:
      return {
        ...state,
        findVendorById: {
          loading: true,
          vendor: "",
          error: "",
        },
      };
    case FIND_VENDOR_BY_ID_SUCCESS:
      return {
        ...state,
        findVendorById: {
          loading: false,
          vendor: action.payload,
          error: "",
        },
      };
    case FIND_VENDOR_BY_ID_FAILURE:
      return {
        ...state,
        findVendorById: {
          loading: false,
          vendor: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_VENDORS_REQUEST:
      return {
        ...state,
        findAllVendors: {
          loading: true,
          vendors: [],
          error: "",
        },
      };
    case FIND_ALL_VENDORS_SUCCESS:
      return {
        ...state,
        findAllVendors: {
          loading: false,
          vendors: action.payload,
          error: "",
        },
      };
    case FIND_ALL_VENDORS_FAILURE:
      return {
        ...state,
        findAllVendors: {
          loading: false,
          vendors: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_VENDOR_REQUEST:
      return {
        ...state,
        updateVendor: {
          loading: true,
          vendor: "",
          error: "",
        },
      };
    case UPDATE_VENDOR_SUCCESS:
      return {
        ...state,
        updateVendor: {
          loading: false,
          vendor: action.payload,
          error: "",
        },
      };
    case UPDATE_VENDOR_FAILURE:
      return {
        ...state,
        updateVendor: {
          loading: false,
          vendor: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_VENDOR_REQUEST:
      return {
        ...state,
        deleteVendor: {
          loading: true,
          vendor: "",
          error: "",
        },
      };

    case DELETE_VENDOR_SUCCESS:
      return {
        ...state,
        findAllVendors: {
          loading: false,
          vendors: state.findAllVendors.vendors.filter(
            (vendor) => vendor.id !== action.payload.id
          ),
          error: "",
        },
        deleteVendor: {
          loading: false,
          vendor: action.payload,
          error: "",
        },
      };
    case DELETE_VENDOR_FAILURE:
      return {
        ...state,
        deleteVendor: {
          loading: false,
          vendor: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_VENDOR_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteVendorPermanently: {
          loading: true,
          vendor: "",
          error: "",
        },
      };
    case DELETE_VENDOR_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllVendors: {
          loading: false,
          vendors: state.findAllVendors.vendors.filter(
            (vendor) => vendor.id !== action.payload.id
          ),
          error: "",
        },
        deleteVendorPermanently: {
          loading: false,
          vendor: action.payload,
          error: "",
        },
      };
    case DELETE_VENDOR_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteVendorPermanently: {
          loading: false,
          vendor: "",
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
export default vendorReducer;
