// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_MACHINE_SUCCESS,
  INSERT_MACHINE_REQUEST,
  INSERT_MACHINE_FAILURE,
  FIND_MACHINE_BY_ID_REQUEST,
  FIND_MACHINE_BY_ID_SUCCESS,
  FIND_MACHINE_BY_ID_FAILURE,
  FIND_ALL_MACHINES_REQUEST,
  FIND_ALL_MACHINES_SUCCESS,
  FIND_ALL_MACHINES_FAILURE,
  FIND_MACHINE_BY_NAME_REQUEST,
  FIND_MACHINE_BY_NAME_SUCCESS,
  FIND_MACHINE_BY_NAME_FAILURE,
  UPDATE_MACHINE_REQUEST,
  UPDATE_MACHINE_SUCCESS,
  UPDATE_MACHINE_FAILURE,
  DELETE_MACHINE_REQUEST,
  DELETE_MACHINE_SUCCESS,
  DELETE_MACHINE_FAILURE,
  DELETE_MACHINE_PERMANENTLY_REQUEST,
  DELETE_MACHINE_PERMANENTLY_SUCCESS,
  DELETE_MACHINE_PERMANENTLY_FAILURE,
} from "./machineTypes";
// This is the Redux machineReducer initialState
const initialState = {
  insertMachine: {
    loading: false,
    machine: "",
    error: "",
  },
  findMachineById: {
    loading: false,
    machine: "",
    error: "",
  },
  findMachineByName: {
    loading: false,
    machine: "",
    error: "",
  },
  findAllMachines: {
    loading: false,
    machine: "",
    error: "",
  },
  updateMachine: {
    loading: false,
    machine: "",
    error: "",
  },

  deleteMachine: {
    loading: false,
    machine: "",
    error: "",
  },
  deleteMachinePermanently: {
    loading: false,
    machine: "",
    error: "",
  },
};

// MachineReducer

const machineReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_MACHINE_REQUEST:
      return {
        ...state,
        insertMachine: {
          loading: true,
          machine: "",
          error: "",
        },
      };
    case INSERT_MACHINE_SUCCESS:
      return {
        ...state,
        insertMachine: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case INSERT_MACHINE_FAILURE:
      return {
        ...state,
        insertMachine: {
          loading: false,
          machine: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_MACHINE_BY_ID_REQUEST:
      return {
        ...state,
        findMachineById: {
          loading: true,
          machine: "",
          error: "",
        },
      };
    case FIND_MACHINE_BY_ID_SUCCESS:
      return {
        ...state,
        findMachineById: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case FIND_MACHINE_BY_ID_FAILURE:
      return {
        ...state,
        findMachineById: {
          loading: false,
          machine: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case FIND_MACHINE_BY_NAME_REQUEST:
      return {
        ...state,
        findMachineByName: {
          loading: true,
          machine: "",
          error: "",
        },
      };
    case FIND_MACHINE_BY_NAME_SUCCESS:
      return {
        ...state,
        findMachineByName: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case FIND_MACHINE_BY_NAME_FAILURE:
      return {
        ...state,
        findMachineByName: {
          loading: false,
          machine: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };

    case FIND_ALL_MACHINES_REQUEST:
      return {
        ...state,
        findAllMachines: {
          loading: true,
          machines: [],
          error: "",
        },
      };
    case FIND_ALL_MACHINES_SUCCESS:
      return {
        ...state,
        findAllMachines: {
          loading: false,
          machines: action.payload,
          error: "",
        },
      };
    case FIND_ALL_MACHINES_FAILURE:
      return {
        ...state,
        findAllMachines: {
          loading: false,
          machines: [],
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case UPDATE_MACHINE_REQUEST:
      return {
        ...state,
        updateMachine: {
          loading: true,
          machine: "",
          error: "",
        },
      };
    case UPDATE_MACHINE_SUCCESS:
      return {
        ...state,
        updateMachine: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case UPDATE_MACHINE_FAILURE:
      return {
        ...state,
        updateMachine: {
          loading: false,
          machine: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_MACHINE_REQUEST:
      return {
        ...state,
        deleteMachine: {
          loading: true,
          machine: "",
          error: "",
        },
      };

    case DELETE_MACHINE_SUCCESS:
      return {
        ...state,
        findAllMachines: {
          loading: false,
          machines: state.findAllMachines.machines.filter(
            (machine) => machine.id !== action.payload.id
          ),
          error: "",
        },
        deleteMachine: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case DELETE_MACHINE_FAILURE:
      return {
        ...state,
        deleteMachine: {
          loading: false,
          machine: "",
          error: {
            message: action.payload.response
              ? action.payload.response.data
              : action.payload.message,
          },
        },
      };
    case DELETE_MACHINE_PERMANENTLY_REQUEST:
      return {
        ...state,
        deleteMachinePermanently: {
          loading: true,
          machine: "",
          error: "",
        },
      };
    case DELETE_MACHINE_PERMANENTLY_SUCCESS:
      return {
        ...state,
        findAllMachines: {
          loading: false,
          machines: state.findAllMachines.machines.filter(
            (machine) => machine.id !== action.payload.id
          ),
          error: "",
        },
        deleteMachinePermanently: {
          loading: false,
          machine: action.payload,
          error: "",
        },
      };
    case DELETE_MACHINE_PERMANENTLY_FAILURE:
      return {
        ...state,
        deleteMachinePermanently: {
          loading: false,
          machine: "",
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
export default machineReducer;
