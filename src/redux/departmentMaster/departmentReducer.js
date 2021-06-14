// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_DEPARTMENT_REQUEST,
  INSERT_DEPARTMENT_SUCCESS,
  INSERT_DEPARTMENT_FAILURE,
  FIND_DEPARTMENT_BY_ID_REQUEST,
  FIND_DEPARTMENT_BY_ID_SUCCESS,
  FIND_DEPARTMENT_BY_ID_FAILURE,
  FIND_ALL_DEPARTMENTS_REQUEST,
  FIND_ALL_DEPARTMENTS_SUCCESS,
  FIND_ALL_DEPARTMENTS_FAILURE,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_PERMANENTLY_REQUEST,
  DELETE_DEPARTMENT_PERMANENTLY_SUCCESS,
  DELETE_DEPARTMENT_PERMANENTLY_FAILURE,
} from "./departmentTypes";

// This is the Redux departmentReducer initialState
const initialState = {
  insertDepartment: {
    loading: false,
    department: "",
    error: "",
  },
  findDepartmentById: {
    loading: false,
    department: "",
    error: "",
  },
  findDepartmentByName: {
    loading: false,
    department: "",
    error: "",
  },
  findAllDepartments: {
    loading: false,
    department: "",
    error: "",
  },
  updateDepartment: {
    loading: false,
    department: "",
    error: "",
  },

  deleteDepartment: {
    loading: false,
    department: "",
    error: "",
  },
  deleteDepartmentPermanently: {
    loading: false,
    department: "",
    error: "",
  },
};

// DepartmentReducer

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_DEPARTMENT_REQUEST:
      return {
        ...state,
        insertDepartment: {
          loading: true,
          department: "",
          error: "",
        },
      };
    case INSERT_DEPARTMENT_SUCCESS:
      return {
        ...state,
        insertDepartment: {
          loading: false,
          department: action.payload,
          error: "",
        },
      };
    case INSERT_DEPARTMENT_FAILURE:
      return {
        ...state,
        insertDepartment: {
          loading: false,
          department: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_DEPARTMENT_BY_ID_REQUEST:
      return {
        ...state,
        findDepartmentById: {
          loading: true,
          department: "",
          error: "",
        },
      };
    case FIND_DEPARTMENT_BY_ID_SUCCESS:
      return {
        ...state,
        findDepartmentById: {
          loading: false,
          department: action.payload,
          error: "",
        },
      };
    case FIND_DEPARTMENT_BY_ID_FAILURE:
      return {
        ...state,
        findDepartmentById: {
          loading: false,
          department: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_DEPARTMENTS_REQUEST:
      return {
        ...state,
        findAllDepartments: {
          loading: true,
          departments: [],
          error: "",
        },
      };
    case FIND_ALL_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        findAllDepartments: {
          loading: false,
          departments: action.payload,
          error: "",
        },
      };
    case FIND_ALL_DEPARTMENTS_FAILURE:
      return {
        ...state,
        findAllDepartments: {
          loading: false,
          departments: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        updateDepartment: {
          loading: true,
          department: "",
          error: "",
        },
      };
    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        updateDepartment: {
          loading: false,
          department: action.payload,
          error: "",
        },
      };
    case UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        updateDepartment: {
          loading: false,
          department: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_DEPARTMENT_REQUEST:
      return {
        ...state,
        deleteDepartment: {
          loading: true,
          department: "",
          error: "",
        },
      };

    case DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        findAllDepartments: {
          loading: false,
          departments: state.findAllDepartments.departments.filter(
            (department) => department.id !== action.payload.id
          ),
          error: "",
        },
        deleteDepartment: {
          loading: false,
          department: action.payload,
          error: "",
        },
      };
    case DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        deleteDepartment: {
          loading: false,
          department: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_DEPARTMENT_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteDepartmentPermanently: {
          loading: true,
          department: "",
          error: "",
        },
      };
    case DELETE_DEPARTMENT_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllDepartments: {
          loading: false,
          departments: state.findAllDepartments.departments.filter(
            (department) => department.id !== action.payload.id
          ),
          error: "",
        },
        deleteDepartmentPermanently: {
          loading: false,
          department: action.payload,
          error: "",
        },
      };
    case DELETE_DEPARTMENT_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteDepartmentPermanently: {
          loading: false,
          department: "",
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
export default departmentReducer;
