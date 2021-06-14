// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
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

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert departments to the database through the springBoot API
export const insertDepartment = (department) => {
  return async (dispatch) => {
    await dispatch(insertDepartmentRequest());
    await axios
      .post(API_URL + "/department/insertDepartment", department)
      .then((response) => {
        const department = response.data;
        dispatch(insertDepartmentSuccess(department));
      })
      .catch((error) => {
        dispatch(insertDepartmentFailure(error));
      });
  };
};
// Method used to find a single department based on ID
export const findDepartmentById = (id) => {
  return async (dispatch) => {
    await dispatch(findDepartmentByIdRequest());
    await axios
      .get(API_URL + "/department/findDepartmentById/" + id)
      .then((response) => {
        // response.data is the users
        const department = response.data;
        dispatch(findDepartmentByIdSuccess(department));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findDepartmentByIdFailure(error));
      });
  };
};

// Method used to find all the departments from the database using the SpringBoot API
export const findAllDepartments = () => {
  return async (dispatch) => {
    await dispatch(findAllDepartmentsRequest());
    await axios
      .get(API_URL + "/departments/findAllDepartments")
      .then((response) => {
        // response.data is the users
        const departments = response.data;
        dispatch(findAllDepartmentsSuccess(departments));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllDepartmentsFailure(error));
      });
  };
};
// Method used to update the department details in the database through the springBoot API
export const updateDepartment = (department) => {
  return async (dispatch) => {
    await dispatch(updateDepartmentRequest());
    await axios
      .put(API_URL + "/department/updateDepartment", department)
      .then((response) => {
        const department = response.data;
        dispatch(updateDepartmentSuccess(department));
      })
      .catch((error) => {
        dispatch(updateDepartmentFailure(error));
      });
  };
};

// Method used to delete a department from the database through the SpringBoot API
export const deleteDepartment = (department) => {
  return async (dispatch) => {
    await dispatch(deleteDepartmentRequest());
    await axios
      .delete(API_URL + "/department/deleteDepartment", department)
      .then((response) => {
        const department = response.data;
        dispatch(deleteDepartmentSuccess(department));
      })
      .catch((error) => {
        dispatch(deleteDepartmentFailure(error));
      });
  };
};
// Method used to delete a department permanently from the database through the SpringBoot API
export const deleteDepartmentPermanently = (department) => {
  return async (dispatch) => {
    await dispatch(deleteDepartmentPermanentlyRequest());
    await axios
      .delete(API_URL + "/department/deleteDepartmentPermanently", department)
      .then((response) => {
        const department = response.data;
        dispatch(deleteDepartmentPermanentlySuccess(department));
      })
      .catch((error) => {
        dispatch(deleteDepartmentPermanentlyFailure(error));
      });
  };
};

export const insertDepartmentRequest = () => {
  return {
    type: INSERT_DEPARTMENT_REQUEST,
  };
};

export const insertDepartmentSuccess = (department) => {
  return {
    type: INSERT_DEPARTMENT_SUCCESS,
    payload: department,
  };
};

export const insertDepartmentFailure = (error) => {
  return {
    type: INSERT_DEPARTMENT_FAILURE,
    payload: error,
  };
};
export const findDepartmentByIdRequest = () => {
  return {
    type: FIND_DEPARTMENT_BY_ID_REQUEST,
  };
};

export const findDepartmentByIdSuccess = (department) => {
  return {
    type: FIND_DEPARTMENT_BY_ID_SUCCESS,
    payload: department,
  };
};

export const findDepartmentByIdFailure = (error) => {
  return {
    type: FIND_DEPARTMENT_BY_ID_FAILURE,
    payload: error,
  };
};

export const findAllDepartmentsRequest = () => {
  return {
    type: FIND_ALL_DEPARTMENTS_REQUEST,
  };
};

export const findAllDepartmentsSuccess = (department) => {
  return {
    type: FIND_ALL_DEPARTMENTS_SUCCESS,
    payload: department,
  };
};

export const findAllDepartmentsFailure = (error) => {
  return {
    type: FIND_ALL_DEPARTMENTS_FAILURE,
    payload: error,
  };
};
export const updateDepartmentRequest = () => {
  return {
    type: UPDATE_DEPARTMENT_REQUEST,
  };
};

export const updateDepartmentSuccess = (department) => {
  return {
    type: UPDATE_DEPARTMENT_SUCCESS,
    payload: department,
  };
};

export const updateDepartmentFailure = (error) => {
  return {
    type: UPDATE_DEPARTMENT_FAILURE,
    payload: error,
  };
};

export const deleteDepartmentRequest = () => {
  return {
    type: DELETE_DEPARTMENT_REQUEST,
  };
};

export const deleteDepartmentSuccess = (department) => {
  return {
    type: DELETE_DEPARTMENT_SUCCESS,
    payload: department,
  };
};

export const deleteDepartmentFailure = (error) => {
  return {
    type: DELETE_DEPARTMENT_FAILURE,
    payload: error,
  };
};
export const deleteDepartmentPermanentlyRequest = () => {
  return {
    type: DELETE_DEPARTMENT_PERMANENTLY_REQUEST,
  };
};

export const deleteDepartmentPermanentlySuccess = (department) => {
  return {
    type: DELETE_DEPARTMENT_PERMANENTLY_SUCCESS,
    payload: department,
  };
};
export const deleteDepartmentPermanentlyFailure = (error) => {
  return {
    type: DELETE_DEPARTMENT_PERMANENTLY_FAILURE,
    payload: error,
  };
};
