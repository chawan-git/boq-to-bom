// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
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

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert bom to the database through the springBoot API
export const insertBom = (bom) => {
  return async (dispatch) => {
    await dispatch(insertBomRequest());
    await axios
      .post(API_URL + "/bom/insertBom", bom)
      .then((response) => {
        const bom = response.data;
        dispatch(insertBomSuccess(bom));
      })
      .catch((error) => {
        dispatch(insertBomFailure(error));
      });
  };
};

// Method used to find a single bom based on ID
export const findBomById = (id) => {
  return async (dispatch) => {
    await dispatch(findBomByIdRequest());
    await axios
      .get(API_URL + "/bom/findBomById/" + id)
      .then((response) => {
        // response.data is the users
        const bom = response.data;
        dispatch(findBomByIdSuccess(bom));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findBomByIdFailure(error));
      });
  };
};

// Method used to find a single bom based on BOMID
export const findBomByBomId = (BOMId) => {
  return async (dispatch) => {
    await dispatch(findBomByBOMIdRequest());
    await axios
      .get(API_URL + "/bom/findBomByBOMId/" + BOMId)
      .then((response) => {
        // response.data is the users
        const bom = response.data;
        dispatch(findBomByBOMIdSuccess(bom));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findBomByBOMIdFailure(error));
      });
  };
};

// Method used to find all the boms from the database using the SpringBoot API
export const findAllBoms = () => {
  return async (dispatch) => {
    await dispatch(findAllBomsRequest());
    await axios
      .get(API_URL + "/bom/findAllBoms")
      .then((response) => {
        // response.data is the users
        const boms = response.data;
        dispatch(findAllBomsSuccess(boms));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllBomsFailure(error));
      });
  };
};

// Method used to update the bom details in the database through the springBoot API
export const updateBom = (bom) => {
  return async (dispatch) => {
    await dispatch(updateBomRequest());
    await axios
      .put(API_URL + "/bom/updateBom", bom)
      .then((response) => {
        const bom = response.data;
        dispatch(updateBomSuccess(bom));
      })
      .catch((error) => {
        dispatch(updateBomFailure(error));
      });
  };
};

// Method used to delete a bom from the database through the SpringBoot API
export const deleteBom = (bom) => {
  return async (dispatch) => {
    await dispatch(deleteBomRequest());
    await axios
      .delete(API_URL + "/bom/deleteBom", bom)
      .then((response) => {
        const bom = response.data;
        dispatch(deleteBomSuccess(bom));
      })
      .catch((error) => {
        dispatch(deleteBomFailure(error));
      });
  };
};

// Method used to delete a bom from the database through the SpringBoot API
export const deleteBomPermanently = (bom) => {
  return async (dispatch) => {
    await dispatch(deleteBomPermanentlyRequest());
    await axios
      .delete(API_URL + "/bom/deleteBomPermanently", bom)
      .then((response) => {
        const bom = response.data;
        dispatch(deleteBomPermanentlySuccess(bom));
      })
      .catch((error) => {
        dispatch(deleteBomPermanentlyFailure(error));
      });
  };
};

export const boqToBom = (boqId) => {
  return async (dispatch) => {
    await dispatch(boqToBomRequest());
    await axios
      .post(API_URL + "/bom/boqToBom/" + boqId)
      .then((response) => {
        const bomId = response.data;
        dispatch(boqToBomSuccess(bomId));
      })
      .catch((error) => {
        dispatch(boqToBomFailure(error));
      });
  };
};

export const insertBomRequest = () => {
  return {
    type: INSERT_BOM_REQUEST,
  };
};

export const insertBomSuccess = (bom) => {
  return {
    type: INSERT_BOM_SUCCESS,
    payload: bom,
  };
};

export const insertBomFailure = (error) => {
  return {
    type: INSERT_BOM_FAILURE,
    payload: error,
  };
};

export const findBomByIdRequest = () => {
  return {
    type: FIND_BOM_BY_ID_REQUEST,
  };
};

export const findBomByIdSuccess = (bom) => {
  return {
    type: FIND_BOM_BY_ID_SUCCESS,
    payload: bom,
  };
};

export const findBomByIdFailure = (error) => {
  return {
    type: FIND_BOM_BY_ID_FAILURE,
    payload: error,
  };
};

export const findBomByBOMIdRequest = () => {
  return {
    type: FIND_BOM_BY_BOMID_REQUEST,
  };
};

export const findBomByBOMIdSuccess = (bom) => {
  return {
    type: FIND_BOM_BY_BOMID_SUCCESS,
    payload: bom,
  };
};

export const findBomByBOMIdFailure = (error) => {
  return {
    type: FIND_BOM_BY_BOMID_FAILURE,
    payload: error,
  };
};

export const findAllBomsRequest = () => {
  return {
    type: FIND_ALL_BOMS_REQUEST,
  };
};

export const findAllBomsSuccess = (boms) => {
  return {
    type: FIND_ALL_BOMS_SUCCESS,
    payload: boms,
  };
};

export const findAllBomsFailure = (error) => {
  return {
    type: FIND_ALL_BOMS_FAILURE,
    payload: error,
  };
};

export const updateBomRequest = () => {
  return {
    type: UPDATE_BOM_REQUEST,
  };
};

export const updateBomSuccess = (bom) => {
  return {
    type: UPDATE_BOM_SUCCESS,
    payload: bom,
  };
};

export const updateBomFailure = (error) => {
  return {
    type: UPDATE_BOM_FAILURE,
    payload: error,
  };
};

export const deleteBomRequest = () => {
  return {
    type: DELETE_BOM_REQUEST,
  };
};

export const deleteBomSuccess = (bom) => {
  return {
    type: DELETE_BOM_SUCCESS,
    payload: bom,
  };
};

export const deleteBomFailure = (error) => {
  return {
    type: DELETE_BOM_FAILURE,
    payload: error,
  };
};

export const deleteBomPermanentlyRequest = () => {
  return {
    type: DELETE_BOM_PERMANENTLY_REQUEST,
  };
};

export const deleteBomPermanentlySuccess = (bom) => {
  return {
    type: DELETE_BOM_PERMANENTLY_SUCCESS,
    payload: bom,
  };
};

export const deleteBomPermanentlyFailure = (error) => {
  return {
    type: DELETE_BOM_PERMANENTLY_FAILURE,
    payload: error,
  };
};

export const boqToBomRequest = () => {
  return {
    type: BOQ_TO_BOM_REQUEST,
  };
};

export const boqToBomSuccess = (bomId) => {
  return {
    type: BOQ_TO_BOM_SUCCESS,
    payload: bomId,
  };
};

export const boqToBomFailure = (error) => {
  return {
    type: BOQ_TO_BOM_FAILURE,
  };
};
