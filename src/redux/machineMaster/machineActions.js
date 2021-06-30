// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
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
const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert machines to the database through the springBoot API
export const insertMachine = (machine) => {
  return async (dispatch) => {
    await dispatch(insertMachineRequest());
    await axios
      .post(API_URL + "/machine/insertMachine", machine)
      .then((response) => {
        const machine = response.data;
        dispatch(insertMachineSuccess(machine));
      })
      .catch((error) => {
        dispatch(insertMachineFailure(error));
      });
  };
};
// Method used to find a single machine based on ID
export const findMachineById = (id) => {
  return async (dispatch) => {
    await dispatch(findMachineByIdRequest());
    await axios
      .get(API_URL + "/machine/findMachineById/" + id)
      .then((response) => {
        // response.data is the users
        const machine = response.data;
        dispatch(findMachineByIdSuccess(machine));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findMachineByIdFailure(error));
      });
  };
};
// Method used to find a single machine based on name
export const findMachineByName = (machineName) => {
  return async (dispatch) => {
    await dispatch(findMachineByNameRequest());
    await axios
      .get(API_URL + "/machine/findMachineByName/" + machineName)
      .then((response) => {
        // response.data is the users
        const machine = response.data;
        dispatch(findMachineByNameSuccess(machine));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findMachineByNameFailure(error));
      });
  };
};
// Method used to find all the machines from the database using the SpringBoot API
export const findAllMachines = () => {
  return async (dispatch) => {
    await dispatch(findAllMachinesRequest());
    await axios
      .get(API_URL + "/machines/findAllMachines")
      .then((response) => {
        // response.data is the users
        const machines = response.data;
        dispatch(findAllMachinesSuccess(machines));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllMachinesFailure(error));
      });
  };
};
// Method used to update the machine details in the database through the springBoot API
export const updateMachine = (machine) => {
  return async (dispatch) => {
    await dispatch(updateMachineRequest());
    await axios
      .put(API_URL + "/machine/updateMachine", machine)
      .then((response) => {
        const machine = response.data;
        dispatch(updateMachineSuccess(machine));
      })
      .catch((error) => {
        dispatch(updateMachineFailure(error));
      });
  };
};

// Method used to delete a machine from the database through the SpringBoot API
export const deleteMachine = (machine) => {
  return async (dispatch) => {
    await dispatch(deleteMachineRequest());
    await axios
      .delete(API_URL + "/machine/deleteMachine", machine)
      .then((response) => {
        const machine = response.data;
        dispatch(deleteMachineSuccess(machine));
      })
      .catch((error) => {
        dispatch(deleteMachineFailure(error));
      });
  };
};
// Method used to delete a machine permanently from the database through the SpringBoot API
export const deleteMachinePermanently = (machine) => {
  return async (dispatch) => {
    await dispatch(deleteMachinePermanentlyRequest());
    await axios
      .delete(API_URL + "/machine/deleteMachinePermanently", machine)
      .then((response) => {
        const machine = response.data;
        dispatch(deleteMachinePermanentlySuccess(machine));
      })
      .catch((error) => {
        dispatch(deleteMachinePermanentlyFailure(error));
      });
  };
};

export const insertMachineRequest = () => {
  return {
    type: INSERT_MACHINE_REQUEST,
  };
};

export const insertMachineSuccess = (machine) => {
  return {
    type: INSERT_MACHINE_SUCCESS,
    payload: machine,
  };
};

export const insertMachineFailure = (error) => {
  return {
    type: INSERT_MACHINE_FAILURE,
    payload: error,
  };
};
export const findMachineByIdRequest = () => {
  return {
    type: FIND_MACHINE_BY_ID_REQUEST,
  };
};

export const findMachineByIdSuccess = (machine) => {
  return {
    type: FIND_MACHINE_BY_ID_SUCCESS,
    payload: machine,
  };
};

export const findMachineByIdFailure = (error) => {
  return {
    type: FIND_MACHINE_BY_ID_FAILURE,
    payload: error,
  };
};
export const findMachineByNameRequest = () => {
  return {
    type: FIND_MACHINE_BY_NAME_REQUEST,
  };
};

export const findMachineByNameSuccess = (machine) => {
  return {
    type: FIND_MACHINE_BY_NAME_SUCCESS,
    payload: machine,
  };
};

export const findMachineByNameFailure = (error) => {
  return {
    type: FIND_MACHINE_BY_NAME_FAILURE,
    payload: error,
  };
};
export const findAllMachinesRequest = () => {
  return {
    type: FIND_ALL_MACHINES_REQUEST,
  };
};

export const findAllMachinesSuccess = (machine) => {
  return {
    type: FIND_ALL_MACHINES_SUCCESS,
    payload: machine,
  };
};

export const findAllMachinesFailure = (error) => {
  return {
    type: FIND_ALL_MACHINES_FAILURE,
    payload: error,
  };
};
export const updateMachineRequest = () => {
  return {
    type: UPDATE_MACHINE_REQUEST,
  };
};

export const updateMachineSuccess = (machine) => {
  return {
    type: UPDATE_MACHINE_SUCCESS,
    payload: machine,
  };
};

export const updateMachineFailure = (error) => {
  return {
    type: UPDATE_MACHINE_FAILURE,
    payload: error,
  };
};

export const deleteMachineRequest = () => {
  return {
    type: DELETE_MACHINE_REQUEST,
  };
};

export const deleteMachineSuccess = (machine) => {
  return {
    type: DELETE_MACHINE_SUCCESS,
    payload: machine,
  };
};

export const deleteMachineFailure = (error) => {
  return {
    type: DELETE_MACHINE_FAILURE,
    payload: error,
  };
};
export const deleteMachinePermanentlyRequest = () => {
  return {
    type: DELETE_MACHINE_PERMANENTLY_REQUEST,
  };
};

export const deleteMachinePermanentlySuccess = (machine) => {
  return {
    type: DELETE_MACHINE_PERMANENTLY_SUCCESS,
    payload: machine,
  };
};
export const deleteMachinePermanentlyFailure = (error) => {
  return {
    type: DELETE_MACHINE_PERMANENTLY_FAILURE,
    payload: error,
  };
};
