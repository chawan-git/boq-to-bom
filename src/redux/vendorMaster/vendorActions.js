// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_VENDOR_REQUEST,
  INSERT_VENDOR_SUCCESS,
  INSERT_VENDOR_FAILURE,
  FIND_VENDOR_BY_ID_REQUEST,
  FIND_VENDOR_BY_ID_SUCCESS,
  FIND_VENDOR_BY_ID_FAILURE,
  FIND_ALL_VENDORS_REQUEST,
  FIND_ALL_VENDORS_SUCCESS,
  FIND_ALL_VENDORS_FAILURE,
  UPDATE_VENDOR_REQUEST,
  UPDATE_VENDOR_SUCCESS,
  UPDATE_VENDOR_FAILURE,
  DELETE_VENDOR_REQUEST,
  DELETE_VENDOR_SUCCESS,
  DELETE_VENDOR_FAILURE,
  DELETE_VENDOR_PERMANENTLY_REQUEST,
  DELETE_VENDOR_PERMANENTLY_SUCCESS,
  DELETE_VENDOR_PERMANENTLY_FAILURE,
} from "./vendorTypes";

const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert vendors to the database through the springBoot API
export const insertVendor = (vendor) => {
  return async (dispatch) => {
    await dispatch(insertVendorRequest());
    await axios
      .post(API_URL + "/vendor/insertVendor", vendor)
      .then((response) => {
        const vendor = response.data;
        dispatch(insertVendorSuccess(vendor));
      })
      .catch((error) => {
        dispatch(insertVendorFailure(error));
      });
  };
};
// Method used to find a single vendor based on ID
export const findVendorById = (id) => {
  return async (dispatch) => {
    await dispatch(findVendorByIdRequest());
    await axios
      .get(API_URL + "/vendor/findVendorById/" + id)
      .then((response) => {
        // response.data is the users
        const vendor = response.data;
        dispatch(findVendorByIdSuccess(vendor));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findVendorByIdFailure(error));
      });
  };
};

// Method used to find all the vendors from the database using the SpringBoot API
export const findAllVendors = () => {
  return async (dispatch) => {
    await dispatch(findAllVendorsRequest());
    await axios
      .get(API_URL + "/vendors/findAllVendors")
      .then((response) => {
        // response.data is the users
        const vendors = response.data;
        dispatch(findAllVendorsSuccess(vendors));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllVendorsFailure(error));
      });
  };
};
// Method used to update the vendor details in the database through the springBoot API
export const updateVendor = (vendor) => {
  return async (dispatch) => {
    await dispatch(updateVendorRequest());
    await axios
      .put(API_URL + "/vendor/updateVendor", vendor)
      .then((response) => {
        const vendor = response.data;
        dispatch(updateVendorSuccess(vendor));
      })
      .catch((error) => {
        dispatch(updateVendorFailure(error));
      });
  };
};

// Method used to delete a vendor from the database through the SpringBoot API
export const deleteVendor = (vendor) => {
  return async (dispatch) => {
    await dispatch(deleteVendorRequest());
    await axios
      .delete(API_URL + "/vendor/deleteVendor", vendor)
      .then((response) => {
        const vendor = response.data;
        dispatch(deleteVendorSuccess(vendor));
      })
      .catch((error) => {
        dispatch(deleteVendorFailure(error));
      });
  };
};
// Method used to delete a vendor permanently from the database through the SpringBoot API
export const deleteVendorPermanently = (vendor) => {
  return async (dispatch) => {
    await dispatch(deleteVendorPermanentlyRequest());
    await axios
      .delete(API_URL + "/vendor/deleteVendorPermanently", vendor)
      .then((response) => {
        const vendor = response.data;
        dispatch(deleteVendorPermanentlySuccess(vendor));
      })
      .catch((error) => {
        dispatch(deleteVendorPermanentlyFailure(error));
      });
  };
};

export const insertVendorRequest = () => {
  return {
    type: INSERT_VENDOR_REQUEST,
  };
};

export const insertVendorSuccess = (vendor) => {
  return {
    type: INSERT_VENDOR_SUCCESS,
    payload: vendor,
  };
};

export const insertVendorFailure = (error) => {
  return {
    type: INSERT_VENDOR_FAILURE,
    payload: error,
  };
};
export const findVendorByIdRequest = () => {
  return {
    type: FIND_VENDOR_BY_ID_REQUEST,
  };
};

export const findVendorByIdSuccess = (vendor) => {
  return {
    type: FIND_VENDOR_BY_ID_SUCCESS,
    payload: vendor,
  };
};

export const findVendorByIdFailure = (error) => {
  return {
    type: FIND_VENDOR_BY_ID_FAILURE,
    payload: error,
  };
};

export const findAllVendorsRequest = () => {
  return {
    type: FIND_ALL_VENDORS_REQUEST,
  };
};

export const findAllVendorsSuccess = (vendor) => {
  return {
    type: FIND_ALL_VENDORS_SUCCESS,
    payload: vendor,
  };
};

export const findAllVendorsFailure = (error) => {
  return {
    type: FIND_ALL_VENDORS_FAILURE,
    payload: error,
  };
};
export const updateVendorRequest = () => {
  return {
    type: UPDATE_VENDOR_REQUEST,
  };
};

export const updateVendorSuccess = (vendor) => {
  return {
    type: UPDATE_VENDOR_SUCCESS,
    payload: vendor,
  };
};

export const updateVendorFailure = (error) => {
  return {
    type: UPDATE_VENDOR_FAILURE,
    payload: error,
  };
};

export const deleteVendorRequest = () => {
  return {
    type: DELETE_VENDOR_REQUEST,
  };
};

export const deleteVendorSuccess = (vendor) => {
  return {
    type: DELETE_VENDOR_SUCCESS,
    payload: vendor,
  };
};

export const deleteVendorFailure = (error) => {
  return {
    type: DELETE_VENDOR_FAILURE,
    payload: error,
  };
};
export const deleteVendorPermanentlyRequest = () => {
  return {
    type: DELETE_VENDOR_PERMANENTLY_REQUEST,
  };
};

export const deleteVendorPermanentlySuccess = (vendor) => {
  return {
    type: DELETE_VENDOR_PERMANENTLY_SUCCESS,
    payload: vendor,
  };
};
export const deleteVendorPermanentlyFailure = (error) => {
  return {
    type: DELETE_VENDOR_PERMANENTLY_FAILURE,
    payload: error,
  };
};
