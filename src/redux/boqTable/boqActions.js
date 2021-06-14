// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_BOQ_REQUEST,
  INSERT_BOQ_SUCCESS,
  INSERT_BOQ_FAILURE,
  FIND_BOQ_BY_ID_REQUEST,
  FIND_BOQ_BY_ID_SUCCESS,
  FIND_BOQ_BY_ID_FAILURE,
  FIND_BOQ_BY_BOQID_REQUEST,
  FIND_BOQ_BY_BOQID_SUCCESS,
  FIND_BOQ_BY_BOQID_FAILURE,
  FIND_ALL_BOQS_REQUEST,
  FIND_ALL_BOQS_SUCCESS,
  FIND_ALL_BOQS_FAILURE,
  UPDATE_BOQ_REQUEST,
  UPDATE_BOQ_SUCCESS,
  UPDATE_BOQ_FAILURE,
  DELETE_BOQ_REQUEST,
  DELETE_BOQ_SUCCESS,
  DELETE_BOQ_FAILURE,
  DELETE_BOQ_PERMANENTLY_REQUEST,
  DELETE_BOQ_PERMANENTLY_SUCCESS,
  DELETE_BOQ_PERMANENTLY_FAILURE,
} from "./boqTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert boqs to the database through the springBoot API
export const insertBoq = (boq) => {
  return async (dispatch) => {
    await dispatch(insertBoqRequest());
    await axios
      .post(API_URL + "/boq/insertBoq", boq)
      .then((response) => {
        const boq = response.data;
        dispatch(insertBoqSuccess(boq));
      })
      .catch((error) => {
        dispatch(insertBoqFailure(error));
      });
  };
};

// Method used to find a single boq based on ID
export const findBoqById = (id) => {
  return async (dispatch) => {
    await dispatch(findBoqByIdRequest());
    await axios
      .get(API_URL + "/boq/findBoqById/" + id)
      .then((response) => {
        // response.data is the users
        const boq = response.data;
        dispatch(findBoqByIdSuccess(boq));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findBoqByIdFailure(error));
      });
  };
};

// Method used to find a single boq based on BOQID
export const findBoqByBOQId = (BOQId) => {
  return async (dispatch) => {
    await dispatch(findBoqByBOQIdRequest());
    await axios
      .get(API_URL + "/boq/findBoqByBOQId/" + BOQId)
      .then((response) => {
        // response.data is the users
        const boq = response.data;
        dispatch(findBoqByBOQIdSuccess(boq));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findBoqByBOQIdFailure(error));
      });
  };
};

// Method used to fetch all the boqs from the database using the SpringBoot API
export const findAllBoqs = () => {
  return async (dispatch) => {
    await dispatch(findAllBoqsRequest());
    await axios
      .get(API_URL + "/boq/findAllBoqs")
      .then((response) => {
        // response.data is the users
        const boqs = response.data;
        dispatch(findAllBoqsSuccess(boqs));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllBoqsFailure(error));
      });
  };
};

// Method used to update the boq details in the database through the springBoot API
export const updateBoq = (boq) => {
  return async (dispatch) => {
    await dispatch(updateBoqRequest());
    await axios
      .put(API_URL + "/boq/updateBoq", boq)
      .then((response) => {
        const boq = response.data;
        dispatch(updateBoqSuccess(boq));
      })
      .catch((error) => {
        dispatch(updateBoqFailure(error));
      });
  };
};

// Method used to delete a boq from the database through the SpringBoot API
export const deleteBoq = (boq) => {
  return async (dispatch) => {
    await dispatch(deleteBoqRequest());
    await axios
      .delete(API_URL + "/boq/deleteBoq", boq)
      .then((response) => {
        const boq = response.data;
        dispatch(deleteBoqSuccess(boq));
      })
      .catch((error) => {
        dispatch(deleteBoqFailure(error));
      });
  };
};

// Method used to delete a boq from the database through the SpringBoot API
export const deleteBoqPermanently = (boq) => {
  return async (dispatch) => {
    await dispatch(deleteBoqPermanentlyRequest());
    await axios
      .delete(API_URL + "/boq/deleteBoq", boq)
      .then((response) => {
        const boq = response.data;
        dispatch(deleteBoqPermanentlySuccess(boq));
      })
      .catch((error) => {
        dispatch(deleteBoqPermanentlyFailure(error));
      });
  };
};

export const insertBoqRequest = () => {
  return {
    type: INSERT_BOQ_REQUEST,
  };
};

export const insertBoqSuccess = (boq) => {
  return {
    type: INSERT_BOQ_SUCCESS,
    payload: boq,
  };
};

export const insertBoqFailure = (error) => {
  return {
    type: INSERT_BOQ_FAILURE,
    payload: error,
  };
};

export const findBoqByIdRequest = () => {
  return {
    type: FIND_BOQ_BY_ID_REQUEST,
  };
};

export const findBoqByIdSuccess = (boq) => {
  return {
    type: FIND_BOQ_BY_ID_SUCCESS,
    payload: boq,
  };
};

export const findBoqByIdFailure = (error) => {
  return {
    type: FIND_BOQ_BY_ID_FAILURE,
    payload: error,
  };
};

export const findBoqByBOQIdRequest = () => {
  return {
    type: FIND_BOQ_BY_BOQID_REQUEST,
  };
};

export const findBoqByBOQIdSuccess = (boq) => {
  return {
    type: FIND_BOQ_BY_BOQID_SUCCESS,
    payload: boq,
  };
};

export const findBoqByBOQIdFailure = (error) => {
  return {
    type: FIND_BOQ_BY_BOQID_FAILURE,
    payload: error,
  };
};

export const findAllBoqsRequest = () => {
  return {
    type: FIND_ALL_BOQS_REQUEST,
  };
};

export const findAllBoqsSuccess = (boqs) => {
  return {
    type: FIND_ALL_BOQS_SUCCESS,
    payload: boqs,
  };
};

export const findAllBoqsFailure = (error) => {
  return {
    type: FIND_ALL_BOQS_FAILURE,
    payload: error,
  };
};

export const updateBoqRequest = () => {
  return {
    type: UPDATE_BOQ_REQUEST,
  };
};

export const updateBoqSuccess = (boq) => {
  return {
    type: UPDATE_BOQ_SUCCESS,
    payload: boq,
  };
};

export const updateBoqFailure = (error) => {
  return {
    type: UPDATE_BOQ_FAILURE,
    payload: error,
  };
};

export const deleteBoqRequest = () => {
  return {
    type: DELETE_BOQ_REQUEST,
  };
};

export const deleteBoqSuccess = (boq) => {
  return {
    type: DELETE_BOQ_SUCCESS,
    payload: boq,
  };
};

export const deleteBoqFailure = (error) => {
  return {
    type: DELETE_BOQ_FAILURE,
    payload: error,
  };
};

export const deleteBoqPermanentlyRequest = () => {
  return {
    type: DELETE_BOQ_PERMANENTLY_REQUEST,
  };
};

export const deleteBoqPermanentlySuccess = (boq) => {
  return {
    type: DELETE_BOQ_PERMANENTLY_SUCCESS,
    payload: boq,
  };
};

export const deleteBoqPermanentlyFailure = (error) => {
  return {
    type: DELETE_BOQ_PERMANENTLY_FAILURE,
    payload: error,
  };
};
