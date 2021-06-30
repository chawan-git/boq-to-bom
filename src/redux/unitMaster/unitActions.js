// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_UNIT_REQUEST,
  INSERT_UNIT_SUCCESS,
  INSERT_UNIT_FAILURE,
  FIND_UNIT_BY_ID_REQUEST,
  FIND_UNIT_BY_ID_SUCCESS,
  FIND_UNIT_BY_ID_FAILURE,
  FIND_ALL_UNITS_REQUEST,
  FIND_ALL_UNITS_SUCCESS,
  FIND_ALL_UNITS_FAILURE,
  FIND_UNIT_BY_NAME_REQUEST,
  FIND_UNIT_BY_NAME_SUCCESS,
  FIND_UNIT_BY_NAME_FAILURE,
  UPDATE_UNIT_REQUEST,
  UPDATE_UNIT_SUCCESS,
  UPDATE_UNIT_FAILURE,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE,
  DELETE_UNIT_PERMANENTLY_REQUEST,
  DELETE_UNIT_PERMANENTLY_SUCCESS,
  DELETE_UNIT_PERMANENTLY_FAILURE,
} from "./unitTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert units to the database through the springBoot API
export const insertUnit = (unit) => {
  return async (dispatch) => {
    await dispatch(insertUnitRequest());
    await axios
      .post(API_URL + "/unit/insertUnit", unit)
      .then((response) => {
        const unit = response.data;
        dispatch(insertUnitSuccess(unit));
      })
      .catch((error) => {
        dispatch(insertUnitFailure(error));
      });
  };
};
// Method used to find a single unit based on ID
export const findUnitById = (id) => {
  return async (dispatch) => {
    await dispatch(findUnitByIdRequest());
    await axios
      .get(API_URL + "/unit/findUnitById/" + id)
      .then((response) => {
        // response.data is the users
        const unit = response.data;
        dispatch(findUnitByIdSuccess(unit));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findUnitByIdFailure(error));
      });
  };
};
// Method used to find a single unit based on name
export const findUnitByName = (unitName) => {
  return async (dispatch) => {
    await dispatch(findUnitByNameRequest());
    await axios
      .get(API_URL + "/unit/findUnitByName/" + unitName)
      .then((response) => {
        // response.data is the users
        const unit = response.data;
        dispatch(findUnitByNameSuccess(unit));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findUnitByNameFailure(error));
      });
  };
};
// Method used to find all the units from the database using the SpringBoot API
export const findAllUnits = () => {
  return async (dispatch) => {
    await dispatch(findAllUnitsRequest());
    await axios
      .get(API_URL + "/units/findAllUnits")
      .then((response) => {
        // response.data is the users
        const units = response.data;
        dispatch(findAllUnitsSuccess(units));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllUnitsFailure(error));
      });
  };
};
// Method used to update the unit details in the database through the springBoot API
export const updateUnit = (unit) => {
  return async (dispatch) => {
    await dispatch(updateUnitRequest());
    await axios
      .put(API_URL + "/unit/updateUnit", unit)
      .then((response) => {
        const unit = response.data;
        dispatch(updateUnitSuccess(unit));
      })
      .catch((error) => {
        dispatch(updateUnitFailure(error));
      });
  };
};

// Method used to delete a unit from the database through the SpringBoot API
export const deleteUnit = (unit) => {
  return async (dispatch) => {
    await dispatch(deleteUnitRequest());
    await axios
      .delete(API_URL + "/unit/deleteUnit", unit)
      .then((response) => {
        const unit = response.data;
        dispatch(deleteUnitSuccess(unit));
      })
      .catch((error) => {
        dispatch(deleteUnitFailure(error));
      });
  };
};
// Method used to delete a unit permanently from the database through the SpringBoot API
export const deleteUnitPermanently = (unit) => {
  return async (dispatch) => {
    await dispatch(deleteUnitPermanentlyRequest());
    await axios
      .delete(API_URL + "/unit/deleteUnitPermanently", unit)
      .then((response) => {
        const unit = response.data;
        dispatch(deleteUnitPermanentlySuccess(unit));
      })
      .catch((error) => {
        dispatch(deleteUnitPermanentlyFailure(error));
      });
  };
};

export const insertUnitRequest = () => {
  return {
    type: INSERT_UNIT_REQUEST,
  };
};

export const insertUnitSuccess = (unit) => {
  return {
    type: INSERT_UNIT_SUCCESS,
    payload: unit,
  };
};

export const insertUnitFailure = (error) => {
  return {
    type: INSERT_UNIT_FAILURE,
    payload: error,
  };
};
export const findUnitByIdRequest = () => {
  return {
    type: FIND_UNIT_BY_ID_REQUEST,
  };
};

export const findUnitByIdSuccess = (unit) => {
  return {
    type: FIND_UNIT_BY_ID_SUCCESS,
    payload: unit,
  };
};

export const findUnitByIdFailure = (error) => {
  return {
    type: FIND_UNIT_BY_ID_FAILURE,
    payload: error,
  };
};
export const findUnitByNameRequest = () => {
  return {
    type: FIND_UNIT_BY_NAME_REQUEST,
  };
};

export const findUnitByNameSuccess = (unit) => {
  return {
    type: FIND_UNIT_BY_NAME_SUCCESS,
    payload: unit,
  };
};

export const findUnitByNameFailure = (error) => {
  return {
    type: FIND_UNIT_BY_NAME_FAILURE,
    payload: error,
  };
};
export const findAllUnitsRequest = () => {
  return {
    type: FIND_ALL_UNITS_REQUEST,
  };
};

export const findAllUnitsSuccess = (unit) => {
  return {
    type: FIND_ALL_UNITS_SUCCESS,
    payload: unit,
  };
};

export const findAllUnitsFailure = (error) => {
  return {
    type: FIND_ALL_UNITS_FAILURE,
    payload: error,
  };
};
export const updateUnitRequest = () => {
  return {
    type: UPDATE_UNIT_REQUEST,
  };
};

export const updateUnitSuccess = (unit) => {
  return {
    type: UPDATE_UNIT_SUCCESS,
    payload: unit,
  };
};

export const updateUnitFailure = (error) => {
  return {
    type: UPDATE_UNIT_FAILURE,
    payload: error,
  };
};

export const deleteUnitRequest = () => {
  return {
    type: DELETE_UNIT_REQUEST,
  };
};

export const deleteUnitSuccess = (unit) => {
  return {
    type: DELETE_UNIT_SUCCESS,
    payload: unit,
  };
};

export const deleteUnitFailure = (error) => {
  return {
    type: DELETE_UNIT_FAILURE,
    payload: error,
  };
};
export const deleteUnitPermanentlyRequest = () => {
  return {
    type: DELETE_UNIT_PERMANENTLY_REQUEST,
  };
};

export const deleteUnitPermanentlySuccess = (unit) => {
  return {
    type: DELETE_UNIT_PERMANENTLY_SUCCESS,
    payload: unit,
  };
};
export const deleteUnitPermanentlyFailure = (error) => {
  return {
    type: DELETE_UNIT_PERMANENTLY_FAILURE,
    payload: error,
  };
};
