// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_GST_REQUEST,
  INSERT_GST_SUCCESS,
  INSERT_GST_FAILURE,
  FIND_GST_BY_ID_REQUEST,
  FIND_GST_BY_ID_SUCCESS,
  FIND_GST_BY_ID_FAILURE,
  FIND_ALL_GST_REQUEST,
  FIND_ALL_GST_SUCCESS,
  FIND_ALL_GST_FAILURE,
  UPDATE_GST_REQUEST,
  UPDATE_GST_SUCCESS,
  UPDATE_GST_FAILURE,
  DELETE_GST_REQUEST,
  DELETE_GST_SUCCESS,
  DELETE_GST_FAILURE,
  DELETE_GST_PERMANENTLY_REQUEST,
  DELETE_GST_PERMANENTLY_SUCCESS,
  DELETE_GST_PERMANENTLY_FAILURE,
} from "./gstTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert gst to the database through the springBoot API
export const insertGst = (gst) => {
  return async (dispatch) => {
    await dispatch(insertGstRequest());
    await axios
      .post(API_URL + "/gst/insertGST", gst)
      .then((response) => {
        const gst = response.data;
        dispatch(insertGstSuccess(gst));
      })
      .catch((error) => {
        dispatch(insertGstFailure(error));
      });
  };
};

// Method used to find a single gst based on ID
export const findGstById = (id) => {
  return async (dispatch) => {
    await dispatch(findGstByIdRequest());
    await axios
      .get(API_URL + "/gst/findGstById/" + id)
      .then((response) => {
        // response.data is the users
        const gst = response.data;
        dispatch(findGstByIdSuccess(gst));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findGstByIdFailure(error));
      });
  };
};

// Method used to find all the gsts from the database using the SpringBoot API
export const findAllGst = () => {
  return async (dispatch) => {
    await dispatch(findAllGstRequest());
    await axios
      .get(API_URL + "/gst/findAllGST")
      .then((response) => {
        // response.data is the users
        const gst = response.data;
        dispatch(findAllGstSuccess(gst));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllGstFailure(error));
      });
  };
};

// Method used to update the gst details in the database through the springBoot API
export const updateGst = (gst) => {
  return async (dispatch) => {
    await dispatch(updateGstRequest());
    await axios
      .put(API_URL + "/gst/updateGST", gst)
      .then((response) => {
        const gst = response.data;
        dispatch(updateGstSuccess(gst));
      })
      .catch((error) => {
        dispatch(updateGstFailure(error));
      });
  };
};

// Method used to delete a gst from the database through the SpringBoot API
export const deleteGst = (gst) => {
  return async (dispatch) => {
    await dispatch(deleteGstRequest());
    await axios
      .delete(API_URL + "/gst/deleteGST", gst)
      .then((response) => {
        const gst = response.data;
        dispatch(deleteGstSuccess(gst));
      })
      .catch((error) => {
        dispatch(deleteGstFailure(error));
      });
  };
};

// Method used to delete a gst from the database through the SpringBoot API
export const deleteGstPermanently = (gst) => {
  return async (dispatch) => {
    await dispatch(deleteGstPermanentlyRequest());
    await axios
      .delete(API_URL + "/gst/deleteGSTPermanently", gst)
      .then((response) => {
        const gst = response.data;
        dispatch(deleteGstPermanentlySuccess(gst));
      })
      .catch((error) => {
        dispatch(deleteGstPermanentlyFailure(error));
      });
  };
};

export const insertGstRequest = () => {
  return {
    type: INSERT_GST_REQUEST,
  };
};

export const insertGstSuccess = (gst) => {
  return {
    type: INSERT_GST_SUCCESS,
    payload: gst,
  };
};

export const insertGstFailure = (error) => {
  return {
    type: INSERT_GST_FAILURE,
    payload: error,
  };
};

export const findGstByIdRequest = () => {
  return {
    type: FIND_GST_BY_ID_REQUEST,
  };
};

export const findGstByIdSuccess = (gst) => {
  return {
    type: FIND_GST_BY_ID_SUCCESS,
    payload: gst,
  };
};

export const findGstByIdFailure = (error) => {
  return {
    type: FIND_GST_BY_ID_FAILURE,
    payload: error,
  };
};

export const findAllGstRequest = () => {
  return {
    type: FIND_ALL_GST_REQUEST,
  };
};

export const findAllGstSuccess = (gst) => {
  return {
    type: FIND_ALL_GST_SUCCESS,
    payload: gst,
  };
};

export const findAllGstFailure = (error) => {
  return {
    type: FIND_ALL_GST_FAILURE,
    payload: error,
  };
};

export const updateGstRequest = () => {
  return {
    type: UPDATE_GST_REQUEST,
  };
};

export const updateGstSuccess = (gst) => {
  return {
    type: UPDATE_GST_SUCCESS,
    payload: gst,
  };
};

export const updateGstFailure = (error) => {
  return {
    type: UPDATE_GST_FAILURE,
    payload: error,
  };
};

export const deleteGstRequest = () => {
  return {
    type: DELETE_GST_REQUEST,
  };
};

export const deleteGstSuccess = (gst) => {
  return {
    type: DELETE_GST_SUCCESS,
    payload: gst,
  };
};

export const deleteGstFailure = (error) => {
  return {
    type: DELETE_GST_FAILURE,
    payload: error,
  };
};

export const deleteGstPermanentlyRequest = () => {
  return {
    type: DELETE_GST_PERMANENTLY_REQUEST,
  };
};

export const deleteGstPermanentlySuccess = (gst) => {
  return {
    type: DELETE_GST_PERMANENTLY_SUCCESS,
    payload: gst,
  };
};

export const deleteGstPermanentlyFailure = (error) => {
  return {
    type: DELETE_GST_PERMANENTLY_FAILURE,
    payload: error,
  };
};
