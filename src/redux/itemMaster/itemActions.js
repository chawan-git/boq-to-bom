// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_ITEM_REQUEST,
  INSERT_ITEM_SUCCESS,
  INSERT_ITEM_FAILURE,
  FIND_ITEM_BY_ID_REQUEST,
  FIND_ITEM_BY_ID_SUCCESS,
  FIND_ITEM_BY_ID_FAILURE,
  FIND_ALL_ITEMS_REQUEST,
  FIND_ALL_ITEMS_SUCCESS,
  FIND_ALL_ITEMS_FAILURE,
  FIND_ITEM_BY_NAME_REQUEST,
  FIND_ITEM_BY_NAME_SUCCESS,
  FIND_ITEM_BY_NAME_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_PERMANENTLY_REQUEST,
  DELETE_ITEM_PERMANENTLY_SUCCESS,
  DELETE_ITEM_PERMANENTLY_FAILURE,
} from "./itemTypes";
const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert items to the database through the springBoot API
export const insertItem = (item) => {
  return async (dispatch) => {
    await dispatch(insertItemRequest());
    await axios
      .post(API_URL + "/item/insertItem", item)
      .then((response) => {
        const item = response.data;
        dispatch(insertItemSuccess(item));
      })
      .catch((error) => {
        dispatch(insertItemFailure(error));
      });
  };
};
// Method used to find a single item based on ID
export const findItemById = (id) => {
  return async (dispatch) => {
    await dispatch(findItemByIdRequest());
    await axios
      .get(API_URL + "/item/findItemById/" + id)
      .then((response) => {
        // response.data is the users
        const item = response.data;
        dispatch(findItemByIdSuccess(item));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findItemByIdFailure(error));
      });
  };
};
// Method used to find a single item based on name
export const findItemByName = (itemName) => {
  return async (dispatch) => {
    await dispatch(findItemByNameRequest());
    await axios
      .get(API_URL + "/item/findItemByName/" + itemName)
      .then((response) => {
        // response.data is the users
        const item = response.data;
        dispatch(findItemByNameSuccess(item));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findItemByNameFailure(error));
      });
  };
};
// Method used to find all the items from the database using the SpringBoot API
export const findAllItems = () => {
  return async (dispatch) => {
    await dispatch(findAllItemsRequest());
    await axios
      .get(API_URL + "/items/findAllItems")
      .then((response) => {
        // response.data is the users
        const items = response.data;
        dispatch(findAllItemsSuccess(items));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllItemsFailure(error));
      });
  };
};
// Method used to update the item details in the database through the springBoot API
export const updateItem = (item) => {
  return async (dispatch) => {
    await dispatch(updateItemRequest());
    await axios
      .put(API_URL + "/item/updateItem", item)
      .then((response) => {
        const item = response.data;
        dispatch(updateItemSuccess(item));
      })
      .catch((error) => {
        dispatch(updateItemFailure(error));
      });
  };
};

// Method used to delete a item from the database through the SpringBoot API
export const deleteItem = (item) => {
  return async (dispatch) => {
    await dispatch(deleteItemRequest());
    await axios
      .delete(API_URL + "/item/deleteItem", item)
      .then((response) => {
        const item = response.data;
        dispatch(deleteItemSuccess(item));
      })
      .catch((error) => {
        dispatch(deleteItemFailure(error));
      });
  };
};
// Method used to delete a item permanently from the database through the SpringBoot API
export const deleteItemPermanently = (item) => {
  return async (dispatch) => {
    await dispatch(deleteItemPermanentlyRequest());
    await axios
      .delete(API_URL + "/item/deleteItemPermanently", item)
      .then((response) => {
        const item = response.data;
        dispatch(deleteItemPermanentlySuccess(item));
      })
      .catch((error) => {
        dispatch(deleteItemPermanentlyFailure(error));
      });
  };
};

export const insertItemRequest = () => {
  return {
    type: INSERT_ITEM_REQUEST,
  };
};

export const insertItemSuccess = (item) => {
  return {
    type: INSERT_ITEM_SUCCESS,
    payload: item,
  };
};

export const insertItemFailure = (error) => {
  return {
    type: INSERT_ITEM_FAILURE,
    payload: error,
  };
};
export const findItemByIdRequest = () => {
  return {
    type: FIND_ITEM_BY_ID_REQUEST,
  };
};

export const findItemByIdSuccess = (item) => {
  return {
    type: FIND_ITEM_BY_ID_SUCCESS,
    payload: item,
  };
};

export const findItemByIdFailure = (error) => {
  return {
    type: FIND_ITEM_BY_ID_FAILURE,
    payload: error,
  };
};
export const findItemByNameRequest = () => {
  return {
    type: FIND_ITEM_BY_NAME_REQUEST,
  };
};

export const findItemByNameSuccess = (item) => {
  return {
    type: FIND_ITEM_BY_NAME_SUCCESS,
    payload: item,
  };
};

export const findItemByNameFailure = (error) => {
  return {
    type: FIND_ITEM_BY_NAME_FAILURE,
    payload: error,
  };
};
export const findAllItemsRequest = () => {
  return {
    type: FIND_ALL_ITEMS_REQUEST,
  };
};

export const findAllItemsSuccess = (item) => {
  return {
    type: FIND_ALL_ITEMS_SUCCESS,
    payload: item,
  };
};

export const findAllItemsFailure = (error) => {
  return {
    type: FIND_ALL_ITEMS_FAILURE,
    payload: error,
  };
};
export const updateItemRequest = () => {
  return {
    type: UPDATE_ITEM_REQUEST,
  };
};

export const updateItemSuccess = (item) => {
  return {
    type: UPDATE_ITEM_SUCCESS,
    payload: item,
  };
};

export const updateItemFailure = (error) => {
  return {
    type: UPDATE_ITEM_FAILURE,
    payload: error,
  };
};

export const deleteItemRequest = () => {
  return {
    type: DELETE_ITEM_REQUEST,
  };
};

export const deleteItemSuccess = (item) => {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: item,
  };
};

export const deleteItemFailure = (error) => {
  return {
    type: DELETE_ITEM_FAILURE,
    payload: error,
  };
};
export const deleteItemPermanentlyRequest = () => {
  return {
    type: DELETE_ITEM_PERMANENTLY_REQUEST,
  };
};

export const deleteItemPermanentlySuccess = (item) => {
  return {
    type: DELETE_ITEM_PERMANENTLY_SUCCESS,
    payload: item,
  };
};
export const deleteItemPermanentlyFailure = (error) => {
  return {
    type: DELETE_ITEM_PERMANENTLY_FAILURE,
    payload: error,
  };
};
