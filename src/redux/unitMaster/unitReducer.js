// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_UNIT_REQUEST,
  INSERT_UNIT_SUCCESS,
  INSERT_UNIT_FAILURE,
  FIND_UNIT_BY_ID_REQUEST,
  FIND_UNIT_BY_ID_SUCCESS,
  FIND_UNIT_BY_ID_FAILURE,
  FIND_UNIT_BY_NAME_REQUEST,
  FIND_UNIT_BY_NAME_SUCCESS,
  FIND_UNIT_BY_NAME_FAILURE,
  FIND_ALL_UNITS_REQUEST,
  FIND_ALL_UNITS_SUCCESS,
  FIND_ALL_UNITS_FAILURE,
  UPDATE_UNIT_REQUEST,
  UPDATE_UNIT_SUCCESS,
  UPDATE_UNIT_FAILURE,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE,
  DELETE_UNIT_PERMANENTLY_REQUEST,
  DELETE_UNIT_PERMANENTLY_SUCCESS,
  DELETE_UNIT_PERMANENTLY_FAILURE,
} from "./unitTypes";
// This is the Redux unitReducer initialState
const initialState = {
  insertUnit: {
    loading: false,
    unit: "",
    error: "",
  },
  findUnitById: {
    loading: false,
    unit: "",
    error: "",
  },
  findUnitByName: {
    loading: false,
    unit: "",
    error: "",
  },
  findAllUnits: {
    loading: false,
    unit: "",
    error: "",
  },
  updateUnit: {
    loading: false,
    unit: "",
    error: "",
  },

  deleteUnit: {
    loading: false,
    unit: "",
    error: "",
  },
  deleteUnitPermanently: {
    loading: false,
    unit: "",
    error: "",
  },
};

// UnitReducer

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_UNIT_REQUEST:
      return {
        ...state,
        insertUnit: {
          loading: true,
          unit: "",
          error: "",
        },
      };
    case INSERT_UNIT_SUCCESS:
      return {
        ...state,
        insertUnit: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case INSERT_UNIT_FAILURE:
      return {
        ...state,
        insertUnit: {
          loading: false,
          unit: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_UNIT_BY_ID_REQUEST:
      return {
        ...state,
        findUnitById: {
          loading: true,
          unit: "",
          error: "",
        },
      };
    case FIND_UNIT_BY_ID_SUCCESS:
      return {
        ...state,
        findUnitById: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case FIND_UNIT_BY_ID_FAILURE:
      return {
        ...state,
        findUnitById: {
          loading: false,
          unit: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_UNIT_BY_NAME_REQUEST:
      return {
        ...state,
        findUnitByName: {
          loading: true,
          unit: "",
          error: "",
        },
      };
    case FIND_UNIT_BY_NAME_SUCCESS:
      return {
        ...state,
        findUnitByName: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case FIND_UNIT_BY_NAME_FAILURE:
      return {
        ...state,
        findUnitByName: {
          loading: false,
          unit: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_UNITS_REQUEST:
      return {
        ...state,
        findAllUnits: {
          loading: true,
          units: [],
          error: "",
        },
      };
    case FIND_ALL_UNITS_SUCCESS:
      return {
        ...state,
        findAllUnits: {
          loading: false,
          units: action.payload,
          error: "",
        },
      };
    case FIND_ALL_UNITS_FAILURE:
      return {
        ...state,
        findAllUnits: {
          loading: false,
          units: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_UNIT_REQUEST:
      return {
        ...state,
        updateUnit: {
          loading: true,
          unit: "",
          error: "",
        },
      };
    case UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        updateUnit: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case UPDATE_UNIT_FAILURE:
      return {
        ...state,
        updateUnit: {
          loading: false,
          unit: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_UNIT_REQUEST:
      return {
        ...state,
        deleteUnit: {
          loading: true,
          unit: "",
          error: "",
        },
      };

    case DELETE_UNIT_SUCCESS:
      return {
        ...state,
        findAllUnits: {
          loading: false,
          units: state.findAllUnits.units.filter(
            (unit) => unit.id !== action.payload.id
          ),
          error: "",
        },
        deleteUnit: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case DELETE_UNIT_FAILURE:
      return {
        ...state,
        deleteUnit: {
          loading: false,
          unit: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_UNIT_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteUnitPermanently: {
          loading: true,
          unit: "",
          error: "",
        },
      };
    case DELETE_UNIT_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllUnits: {
          loading: false,
          units: state.findAllUnits.units.filter(
            (unit) => unit.id !== action.payload.id
          ),
          error: "",
        },
        deleteUnitPermanently: {
          loading: false,
          unit: action.payload,
          error: "",
        },
      };
    case DELETE_UNIT_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteUnitPermanently: {
          loading: false,
          unit: "",
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
export default unitReducer;
