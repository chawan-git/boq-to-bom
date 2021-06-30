// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_BOM_REQUEST,
  INSERT_BOM_SUCCESS,
  INSERT_BOM_FAILURE,
  FIND_BOM_BY_ID_REQUEST,
  FIND_BOM_BY_ID_SUCCESS,
  FIND_BOM_BY_ID_FAILURE,
  FIND_BOM_BY_BOMID_REQUEST,
  FIND_BOM_BY_BOMID_SUCCESS,
  FIND_BOM_BY_BOMID_FAILURE,
  FIND_ALL_BOMS_REQUEST,
  FIND_ALL_BOMS_SUCCESS,
  FIND_ALL_BOMS_FAILURE,
  UPDATE_BOM_REQUEST,
  UPDATE_BOM_SUCCESS,
  UPDATE_BOM_FAILURE,
  DELETE_BOM_REQUEST,
  DELETE_BOM_SUCCESS,
  DELETE_BOM_FAILURE,
  DELETE_BOM_PERMANENTLY_REQUEST,
  DELETE_BOM_PERMANENTLY_SUCCESS,
  DELETE_BOM_PERMANENTLY_FAILURE,
  BOQ_TO_BOM_REQUEST,
  BOQ_TO_BOM_SUCCESS,
  BOQ_TO_BOM_FAILURE,
} from "./bomTypes";
// This is the Redux bomReducer initialState
const initialState = {
  insertBom: {
    loading: false,
    bom: "",
    error: "",
  },
  findBomById: {
    loading: false,
    bom: "",
    error: "",
  },
  findBomByBomId: {
    loading: false,
    bom: "",
    error: "",
  },
  findAllBoms: {
    loading: false,
    boms: "",
    error: "",
  },
  updateBom: {
    loading: false,
    bom: "",
    error: "",
  },
  deleteBom: {
    loading: false,
    bom: "",
    error: "",
  },
  deleteBomPermanently: {
    loading: false,
    bom: "",
    error: "",
  },
  boqToBom: {
    loading: false,
    bomId: "",
    error: "",
  },
};

// BomReducer
const bomReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_BOM_REQUEST:
      return {
        ...state,
        insertBom: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case INSERT_BOM_SUCCESS:
      return {
        ...state,
        insertBom: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case INSERT_BOM_FAILURE:
      return {
        ...state,
        insertBom: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_BOM_BY_ID_REQUEST:
      return {
        ...state,
        findBomById: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case FIND_BOM_BY_ID_SUCCESS:
      return {
        ...state,
        findBomById: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case FIND_BOM_BY_ID_FAILURE:
      return {
        ...state,
        findBomById: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_BOM_BY_BOMID_REQUEST:
      return {
        ...state,
        findBomByBomId: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case FIND_BOM_BY_BOMID_SUCCESS:
      return {
        ...state,
        findBomByBomId: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case FIND_BOM_BY_BOMID_FAILURE:
      return {
        ...state,
        findBomByBomId: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_BOMS_REQUEST:
      return {
        ...state,
        findAllBoms: {
          loading: true,
          boms: [],
          error: "",
        },
      };
    case FIND_ALL_BOMS_SUCCESS:
      return {
        ...state,
        findAllBoms: {
          loading: false,
          boms: action.payload,
          error: "",
        },
      };
    case FIND_ALL_BOMS_FAILURE:
      return {
        ...state,
        findAllBoms: {
          loading: false,
          boms: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_BOM_REQUEST:
      return {
        ...state,
        updateBom: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case UPDATE_BOM_SUCCESS:
      return {
        ...state,
        updateBom: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case UPDATE_BOM_FAILURE:
      return {
        ...state,
        updateBom: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_BOM_REQUEST:
      return {
        ...state,
        deleteBom: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case DELETE_BOM_SUCCESS:
      return {
        ...state,
        findAllBoms: {
          loading: false,
          boms: state.findAllBoms.boms.filter(
            (bom) => bom.bomId !== action.payload.bomId
          ),
          error: "",
        },
        deleteBom: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case DELETE_BOM_FAILURE:
      return {
        ...state,
        deleteBom: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_BOM_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteBomPermanently: {
          loading: true,
          bom: "",
          error: "",
        },
      };
    case DELETE_BOM_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllBoms: {
          loading: false,
          boms: state.findAllBoms.boms.filter(
            (bom) => bom.bomId !== action.payload.bomId
          ),
          error: "",
        },
        deleteBomPermanently: {
          loading: false,
          bom: action.payload,
          error: "",
        },
      };
    case DELETE_BOM_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteBomPermanently: {
          loading: false,
          bom: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case BOQ_TO_BOM_REQUEST:
      return {
        ...state,
        boqToBom: {
          loading: true,
          bomId: "",
          error: "",
        },
      };
    case BOQ_TO_BOM_SUCCESS:
      return {
        ...state,
        boqToBom: {
          loading: false,
          bomId: action.payload,
          error: "",
        },
      };
    case BOQ_TO_BOM_FAILURE:
      return {
        ...state,
        boqToBom: {
          loading: false,
          bomId: "",
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
export default bomReducer;
