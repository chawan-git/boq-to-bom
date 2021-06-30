// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_WORK_REQUEST,
  INSERT_WORK_SUCCESS,
  INSERT_WORK_FAILURE,
  FIND_WORK_BY_ID_REQUEST,
  FIND_WORK_BY_ID_SUCCESS,
  FIND_WORK_BY_ID_FAILURE,
  FIND_ALL_WORKS_REQUEST,
  FIND_ALL_WORKS_SUCCESS,
  FIND_ALL_WORKS_FAILURE,
  FIND_WORK_BY_NAME_REQUEST,
  FIND_WORK_BY_NAME_SUCCESS,
  FIND_WORK_BY_NAME_FAILURE,
  UPDATE_WORK_REQUEST,
  UPDATE_WORK_SUCCESS,
  UPDATE_WORK_FAILURE,
  DELETE_WORK_REQUEST,
  DELETE_WORK_SUCCESS,
  DELETE_WORK_FAILURE,
  DELETE_WORK_PERMANENTLY_REQUEST,
  DELETE_WORK_PERMANENTLY_SUCCESS,
  DELETE_WORK_PERMANENTLY_FAILURE,
} from "./workTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert works to the database through the springBoot API
export const insertWork = (work) => {
  return async (dispatch) => {
    await dispatch(insertWorkRequest());
    await axios
      .post(API_URL + "/work/insertWork", work)
      .then((response) => {
        const work = response.data;
        dispatch(insertWorkSuccess(work));
      })
      .catch((error) => {
        dispatch(insertWorkFailure(error));
      });
  };
};
// Method used to find a single work based on ID
export const findWorkById = (id) => {
  return async (dispatch) => {
    await dispatch(findWorkByIdRequest());
    await axios
      .get(API_URL + "/work/findWorkById/" + id)
      .then((response) => {
        // response.data is the users
        const work = response.data;
        dispatch(findWorkByIdSuccess(work));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findWorkByIdFailure(error));
      });
  };
};
// Method used to find a single work based on name
export const findWorkByName = (workName) => {
  return async (dispatch) => {
    await dispatch(findWorkByNameRequest());
    await axios
      .get(API_URL + "/work/findWorkByName/" + workName)
      .then((response) => {
        // response.data is the users
        const work = response.data;
        dispatch(findWorkByNameSuccess(work));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findWorkByNameFailure(error));
      });
  };
};
// Method used to find all the works from the database using the SpringBoot API
export const findAllWorks = () => {
  return async (dispatch) => {
    await dispatch(findAllWorksRequest());
    await axios
      .get(API_URL + "/works/findAllWorks")
      .then((response) => {
        // response.data is the users
        const works = response.data;
        dispatch(findAllWorksSuccess(works));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllWorksFailure(error));
      });
  };
};
// Method used to update the work details in the database through the springBoot API
export const updateWork = (work) => {
  return async (dispatch) => {
    await dispatch(updateWorkRequest());
    await axios
      .put(API_URL + "/work/updateWork", work)
      .then((response) => {
        const work = response.data;
        dispatch(updateWorkSuccess(work));
      })
      .catch((error) => {
        dispatch(updateWorkFailure(error));
      });
  };
};

// Method used to delete a work from the database through the SpringBoot API
export const deleteWork = (work) => {
  return async (dispatch) => {
    await dispatch(deleteWorkRequest());
    await axios
      .delete(API_URL + "/work/deleteWork", work)
      .then((response) => {
        const work = response.data;
        dispatch(deleteWorkSuccess(work));
      })
      .catch((error) => {
        dispatch(deleteWorkFailure(error));
      });
  };
};
// Method used to delete a work permanently from the database through the SpringBoot API
export const deleteWorkPermanently = (work) => {
  return async (dispatch) => {
    await dispatch(deleteWorkPermanentlyRequest());
    await axios
      .delete(API_URL + "/work/deleteWorkPermanently", work)
      .then((response) => {
        const work = response.data;
        dispatch(deleteWorkPermanentlySuccess(work));
      })
      .catch((error) => {
        dispatch(deleteWorkPermanentlyFailure(error));
      });
  };
};

export const insertWorkRequest = () => {
  return {
    type: INSERT_WORK_REQUEST,
  };
};

export const insertWorkSuccess = (work) => {
  return {
    type: INSERT_WORK_SUCCESS,
    payload: work,
  };
};

export const insertWorkFailure = (error) => {
  return {
    type: INSERT_WORK_FAILURE,
    payload: error,
  };
};
export const findWorkByIdRequest = () => {
  return {
    type: FIND_WORK_BY_ID_REQUEST,
  };
};

export const findWorkByIdSuccess = (work) => {
  return {
    type: FIND_WORK_BY_ID_SUCCESS,
    payload: work,
  };
};

export const findWorkByIdFailure = (error) => {
  return {
    type: FIND_WORK_BY_ID_FAILURE,
    payload: error,
  };
};
export const findWorkByNameRequest = () => {
  return {
    type: FIND_WORK_BY_NAME_REQUEST,
  };
};

export const findWorkByNameSuccess = (work) => {
  return {
    type: FIND_WORK_BY_NAME_SUCCESS,
    payload: work,
  };
};

export const findWorkByNameFailure = (error) => {
  return {
    type: FIND_WORK_BY_NAME_FAILURE,
    payload: error,
  };
};
export const findAllWorksRequest = () => {
  return {
    type: FIND_ALL_WORKS_REQUEST,
  };
};

export const findAllWorksSuccess = (work) => {
  return {
    type: FIND_ALL_WORKS_SUCCESS,
    payload: work,
  };
};

export const findAllWorksFailure = (error) => {
  return {
    type: FIND_ALL_WORKS_FAILURE,
    payload: error,
  };
};
export const updateWorkRequest = () => {
  return {
    type: UPDATE_WORK_REQUEST,
  };
};

export const updateWorkSuccess = (work) => {
  return {
    type: UPDATE_WORK_SUCCESS,
    payload: work,
  };
};

export const updateWorkFailure = (error) => {
  return {
    type: UPDATE_WORK_FAILURE,
    payload: error,
  };
};

export const deleteWorkRequest = () => {
  return {
    type: DELETE_WORK_REQUEST,
  };
};

export const deleteWorkSuccess = (work) => {
  return {
    type: DELETE_WORK_SUCCESS,
    payload: work,
  };
};

export const deleteWorkFailure = (error) => {
  return {
    type: DELETE_WORK_FAILURE,
    payload: error,
  };
};
export const deleteWorkPermanentlyRequest = () => {
  return {
    type: DELETE_WORK_PERMANENTLY_REQUEST,
  };
};

export const deleteWorkPermanentlySuccess = (work) => {
  return {
    type: DELETE_WORK_PERMANENTLY_SUCCESS,
    payload: work,
  };
};
export const deleteWorkPermanentlyFailure = (error) => {
  return {
    type: DELETE_WORK_PERMANENTLY_FAILURE,
    payload: error,
  };
};
