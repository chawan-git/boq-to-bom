import axios from "axios";
// Author: Ashutosh Rao Chawan & Suggala Manasvi
import {
  INSERT_SUB_WORK_REQUEST,
  INSERT_SUB_WORK_SUCCESS,
  INSERT_SUB_WORK_FAILURE,
  FIND_SUB_WORK_BY_ID_REQUEST,
  FIND_SUB_WORK_BY_ID_SUCCESS,
  FIND_SUB_WORK_BY_ID_FAILURE,
  FIND_ALL_SUB_WORKS_REQUEST,
  FIND_ALL_SUB_WORKS_SUCCESS,
  FIND_ALL_SUB_WORKS_FAILURE,
  FIND_SUB_WORK_BY_NAME_REQUEST,
  FIND_SUB_WORK_BY_NAME_SUCCESS,
  FIND_SUB_WORK_BY_NAME_FAILURE,
  UPDATE_SUB_WORK_REQUEST,
  UPDATE_SUB_WORK_SUCCESS,
  UPDATE_SUB_WORK_FAILURE,
  DELETE_SUB_WORK_REQUEST,
  DELETE_SUB_WORK_SUCCESS,
  DELETE_SUB_WORK_FAILURE,
  DELETE_SUB_WORK_PERMANENTLY_REQUEST,
  DELETE_SUB_WORK_PERMANENTLY_SUCCESS,
  DELETE_SUB_WORK_PERMANENTLY_FAILURE,
} from "./subWorkTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert subWorks to the database through the springBoot API
export const insertSubWork = (subWork) => {
  return async (dispatch) => {
    await dispatch(insertSubWorkRequest());
    await axios
      .post(API_URL + "/subWork/insertSubWork", subWork)
      .then((response) => {
        const subWork = response.data;
        dispatch(insertSubWorkSuccess(subWork));
      })
      .catch((error) => {
        dispatch(insertSubWorkFailure(error));
      });
  };
};

// Method used to fetch a single subWork based on ID
export const findSubWorkById = (id) => {
  return async (dispatch) => {
    await dispatch(findSubWorkByIdRequest());
    await axios
      .get(API_URL + "/subWork/findSubWorkById/" + id)
      .then((response) => {
        // response.data is the users
        const subWork = response.data;
        dispatch(findSubWorkByIdSuccess(subWork));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findSubWorkByIdFailure(error));
      });
  };
};

// Method used to fetch a single subWork based on name
export const findSubWorkByName = (subWorkName) => {
  return async (dispatch) => {
    await dispatch(findSubWorkByNameRequest());
    await axios
      .get(API_URL + "/subWork/findSubWorkByName/" + subWorkName)
      .then((response) => {
        // response.data is the users
        const subWork = response.data;
        dispatch(findSubWorkByNameSuccess(subWork));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findSubWorkByNameFailure(error));
      });
  };
};

// Method used to find all the subWorks from the database using the SpringBoot API
export const findAllSubWorks = () => {
  return async (dispatch) => {
    await dispatch(findAllSubWorksRequest());
    await axios
      .get(API_URL + "/subWorks/findAllSubWorks")
      .then((response) => {
        // response.data is the users
        const subWorks = response.data;
        dispatch(findAllSubWorksSuccess(subWorks));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllSubWorksFailure(error));
      });
  };
};

// Method used to update the subWork details in the database through the springBoot API
export const updateSubWork = (subWork) => {
  return async (dispatch) => {
    await dispatch(updateSubWorkRequest());
    await axios
      .put(API_URL + "/subWork/updateSubWork", subWork)
      .then((response) => {
        const subWork = response.data;
        dispatch(updateSubWorkSuccess(subWork));
      })
      .catch((error) => {
        dispatch(updateSubWorkFailure(error));
      });
  };
};

// Method used to delete an subWork from the database through the SpringBoot API
export const deleteSubWork = (subWork) => {
  return async (dispatch) => {
    await dispatch(deleteSubWorkRequest());
    await axios
      .delete(API_URL + "/subWork/deleteSubWork", subWork)
      .then((response) => {
        const subWork = response.data;
        dispatch(deleteSubWorkSuccess(subWork));
      })
      .catch((error) => {
        dispatch(deleteSubWorkFailure(error));
      });
  };
};

// Method used to delete an subWork from the database through the SpringBoot API
export const deleteSubWorkPermanently = (subWork) => {
  return async (dispatch) => {
    await dispatch(deleteSubWorkPermanentlyRequest());
    await axios
      .delete(API_URL + "/subWork/deleteSubWorkPermanently", subWork)
      .then((response) => {
        const subWork = response.data;
        dispatch(deleteSubWorkPermanentlySuccess(subWork));
      })
      .catch((error) => {
        dispatch(deleteSubWorkPermanentlyFailure(error));
      });
  };
};

export const insertSubWorkRequest = () => {
  return {
    type: INSERT_SUB_WORK_REQUEST,
  };
};

export const insertSubWorkSuccess = (subWork) => {
  return {
    type: INSERT_SUB_WORK_SUCCESS,
    payload: subWork,
  };
};

export const insertSubWorkFailure = (error) => {
  return {
    type: INSERT_SUB_WORK_FAILURE,
    payload: error,
  };
};

export const findSubWorkByIdRequest = () => {
  return {
    type: FIND_SUB_WORK_BY_ID_REQUEST,
  };
};

export const findSubWorkByIdSuccess = (subWork) => {
  return {
    type: FIND_SUB_WORK_BY_ID_SUCCESS,
    payload: subWork,
  };
};

export const findSubWorkByIdFailure = (error) => {
  return {
    type: FIND_SUB_WORK_BY_ID_FAILURE,
    payload: error,
  };
};

export const findSubWorkByNameRequest = () => {
  return {
    type: FIND_SUB_WORK_BY_NAME_REQUEST,
  };
};

export const findSubWorkByNameSuccess = (subWork) => {
  return {
    type: FIND_SUB_WORK_BY_NAME_SUCCESS,
    payload: subWork,
  };
};

export const findSubWorkByNameFailure = (error) => {
  return {
    type: FIND_SUB_WORK_BY_NAME_FAILURE,
    payload: error,
  };
};

export const findAllSubWorksRequest = () => {
  return {
    type: FIND_ALL_SUB_WORKS_REQUEST,
  };
};

export const findAllSubWorksSuccess = (subWork) => {
  return {
    type: FIND_ALL_SUB_WORKS_SUCCESS,
    payload: subWork,
  };
};

export const findAllSubWorksFailure = (error) => {
  return {
    type: FIND_ALL_SUB_WORKS_FAILURE,
    payload: error,
  };
};

export const updateSubWorkRequest = () => {
  return {
    type: UPDATE_SUB_WORK_REQUEST,
  };
};

export const updateSubWorkSuccess = (subWork) => {
  return {
    type: UPDATE_SUB_WORK_SUCCESS,
    payload: subWork,
  };
};

export const updateSubWorkFailure = (error) => {
  return {
    type: UPDATE_SUB_WORK_FAILURE,
    payload: error,
  };
};

export const deleteSubWorkRequest = () => {
  return {
    type: DELETE_SUB_WORK_REQUEST,
  };
};

export const deleteSubWorkSuccess = (subWork) => {
  return {
    type: DELETE_SUB_WORK_SUCCESS,
    payload: subWork,
  };
};

export const deleteSubWorkFailure = (error) => {
  return {
    type: DELETE_SUB_WORK_FAILURE,
    payload: error,
  };
};

export const deleteSubWorkPermanentlyRequest = () => {
  return {
    type: DELETE_SUB_WORK_PERMANENTLY_REQUEST,
  };
};

export const deleteSubWorkPermanentlySuccess = (subWork) => {
  return {
    type: DELETE_SUB_WORK_PERMANENTLY_SUCCESS,
    payload: subWork,
  };
};

export const deleteSubWorkPermanentlyFailure = (error) => {
  return {
    type: DELETE_SUB_WORK_PERMANENTLY_FAILURE,
    payload: error,
  };
};
