// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_TEMPLATE_SUCCESS,
  INSERT_TEMPLATE_REQUEST,
  INSERT_TEMPLATE_FAILURE,
  FIND_TEMPLATE_BY_ID_REQUEST,
  FIND_TEMPLATE_BY_ID_SUCCESS,
  FIND_TEMPLATE_BY_ID_FAILURE,
  FIND_TEMPLATE_BY_BOQ_REQUEST,
  FIND_TEMPLATE_BY_BOQ_SUCCESS,
  FIND_TEMPLATE_BY_BOQ_FAILURE,
  FIND_ALL_TEMPLATES_REQUEST,
  FIND_ALL_TEMPLATES_SUCCESS,
  FIND_ALL_TEMPLATES_FAILURE,
  UPDATE_TEMPLATE_REQUEST,
  UPDATE_TEMPLATE_SUCCESS,
  UPDATE_TEMPLATE_FAILURE,
  DELETE_TEMPLATE_REQUEST,
  DELETE_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE_FAILURE,
  DELETE_TEMPLATE_PERMANENTLY_REQUEST,
  DELETE_TEMPLATE_PERMANENTLY_SUCCESS,
  DELETE_TEMPLATE_PERMANENTLY_FAILURE,
} from "./templateTypes";
// This is the Redux templateReducer initialState
const initialState = {
  insertTemplate: {
    loading: false,
    template: "",
    error: "",
  },
  findTemplateById: {
    loading: false,
    template: "",
    error: "",
  },
  findTemplateByName: {
    loading: false,
    template: "",
    error: "",
  },
  findAllTemplates: {
    loading: false,
    templates: [],
    error: "",
  },
  updateTemplate: {
    loading: false,
    template: "",
    error: "",
  },
  deleteTemplate: {
    loading: false,
    template: "",
    error: "",
  },
};

// TemplateReducer
const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TEMPLATE_REQUEST:
      return {
        ...state,
        insertTemplate: {
          loading: true,
          template: "",
          error: "",
        },
      };
    case INSERT_TEMPLATE_SUCCESS:
      return {
        ...state,
        insertTemplate: {
          loading: false,
          template: action.payload,
          error: "",
        },
      };
    case INSERT_TEMPLATE_FAILURE:
      return {
        ...state,
        insertTemplate: {
          loading: false,
          template: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_TEMPLATE_BY_ID_REQUEST:
      return {
        ...state,
        findTemplateById: {
          loading: true,
          template: "",
          error: "",
        },
      };
    case FIND_TEMPLATE_BY_ID_SUCCESS:
      return {
        ...state,
        findTemplateById: {
          loading: false,
          template: action.payload,
          error: "",
        },
      };
    case FIND_TEMPLATE_BY_ID_FAILURE:
      return {
        ...state,
        findTemplateById: {
          loading: false,
          template: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_TEMPLATE_BY_BOQ_REQUEST:
      return {
        ...state,
        findTemplateByBOQ: {
          loading: true,
          templates: [],
          error: "",
        },
      };
    case FIND_TEMPLATE_BY_BOQ_SUCCESS:
      return {
        ...state,
        findTemplateByBOQ: {
          loading: false,
          templates: action.payload,
          error: "",
        },
      };
    case FIND_TEMPLATE_BY_BOQ_FAILURE:
      return {
        ...state,
        findTemplateByBOQ: {
          loading: false,
          templates: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_ALL_TEMPLATES_REQUEST:
      return {
        ...state,
        findAllTemplates: {
          loading: true,
          templates: [],
          error: "",
        },
      };
    case FIND_ALL_TEMPLATES_SUCCESS:
      return {
        ...state,
        findAllTemplates: {
          loading: false,
          templates: action.payload,
          error: "",
        },
      };
    case FIND_ALL_TEMPLATES_FAILURE:
      return {
        ...state,
        findAllTemplates: {
          loading: false,
          templates: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_TEMPLATE_REQUEST:
      return {
        ...state,
        updateTemplate: {
          loading: true,
          template: "",
          error: "",
        },
      };
    case UPDATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        updateTemplate: {
          loading: false,
          template: action.payload,
          error: "",
        },
      };
    case UPDATE_TEMPLATE_FAILURE:
      return {
        ...state,
        updateTemplate: {
          loading: false,
          template: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case DELETE_TEMPLATE_REQUEST:
      return {
        ...state,
        deleteTemplate: {
          loading: true,
          template: null,
          error: "",
        },
      };
    case DELETE_TEMPLATE_SUCCESS:
      return {
        ...state,
        findAllTemplates: {
          loading: false,
          templates: state.findAllTemplates.templates.filter(
            (template) => template.id !== action.payload.id
          ),
          error: "",
        },
        deleteTemplate: {
          loading: false,
          template: action.payload,
          error: "",
        },
      };

    case DELETE_TEMPLATE_FAILURE:
      return {
        ...state,
        deleteTemplate: {
          loading: false,
          template: null,
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case DELETE_TEMPLATE_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteTemplatePermanently: {
          loading: true,
          template: null,
          error: "",
        },
      };
    case DELETE_TEMPLATE_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllTemplates: {
          loading: false,
          templates: state.findAllTemplates.templates.filter(
            (template) => template.id !== action.payload.id
          ),
          error: "",
        },
        deleteTemplatePermanently: {
          loading: false,
          template: action.payload,
          error: "",
        },
      };

    case DELETE_TEMPLATE_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteTemplatePermanently: {
          loading: false,
          template: null,
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
export default templateReducer;
