// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_USER_REQUEST,
  INSERT_USER_SUCCESS,
  INSERT_USER_FAILURE,
  FIND_USER_BY_ID_REQUEST,
  FIND_USER_BY_ID_SUCCESS,
  FIND_USER_BY_ID_FAILURE,
  FIND_ALL_USERS_REQUEST,
  FIND_ALL_USERS_SUCCESS,
  FIND_ALL_USERS_FAILURE,
  FIND_ALL_USERS_NOT_DELETED_REQUEST,
  FIND_ALL_USERS_NOT_DELETED_SUCCESS,
  FIND_ALL_USERS_NOT_DELETED_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_PERMANENTLY_REQUEST,
  DELETE_USER_PERMANENTLY_SUCCESS,
  DELETE_USER_PERMANENTLY_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
} from "./userTypes";

const API_URL = "https://boqtobom.aqsaindia.com:9001/api/v1";

// Method used to insert users to the database through the springBoot API
export const insertUser = (user) => {
  return async (dispatch) => {
    await dispatch(insertUserRequest());
    await axios
      .post(API_URL + "/user/insertUser", user)
      .then((response) => {
        const user = response.data;
        dispatch(insertUserSuccess(user));
      })
      .catch((error) => {
        dispatch(insertUserFailure(error));
      });
  };
};
// Method used to find a single user based on ID
export const findUserById = (id) => {
  return async (dispatch) => {
    await dispatch(findUserByIdRequest());
    await axios
      .get(API_URL + "/user/findUserById/" + id)
      .then((response) => {
        // response.data is the users
        const user = response.data;
        dispatch(findUserByIdSuccess(user));
      })
      .catch((error) => {
        // error.message is the error message

        dispatch(findUserByIdFailure(error));
      });
  };
};
// Method used to find all the users from the database using the SpringBoot API
export const findAllUsers = () => {
  return async (dispatch) => {
    await dispatch(findAllUsersRequest());
    await axios
      .get(API_URL + "/user/findAllUsers")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(findAllUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllUsersFailure(error));
      });
  };
};

// Method used to find all the users from the database using the SpringBoot API
export const findAllUsersNotDeleted = () => {
  return async (dispatch) => {
    await dispatch(findAllUsersNotDeletedRequest());
    await axios
      .get(API_URL + "/user/findAllUsersNotDeleted")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(findAllUsersNotDeletedSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllUsersNotDeletedFailure(error));
      });
  };
};
// Method used to update the user details in the database through the springBoot API
export const updateUser = (user) => {
  return async (dispatch) => {
    await dispatch(updateUserRequest());
    await axios
      .put(API_URL + "/user/updateUser", user)
      .then((response) => {
        const user = response.data;
        dispatch(updateUserSuccess(user));
      })
      .catch((error) => {
        dispatch(updateUserFailure(error));
      });
  };
};

// Method used to delete a user from the database through the SpringBoot API
export const deleteUser = (id) => {

  return async (dispatch) => {

    await dispatch(deleteUserRequest());

    await axios
      .delete(API_URL + "/user/deleteUser/" + id)
      .then((response) => {
        const user = response.data;
        dispatch(deleteUserSuccess(user));
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error));
      });
  };
};
// Method used to delete a user permanently from the database through the SpringBoot API
export const deleteUserPermanently = (id) => {
  return async (dispatch) => {
    await dispatch(deleteUserPermanentlyRequest());
    await axios
      .delete(API_URL + "/user/deleteUserPermanently/"+id)
      .then((response) => {
        const user = response.data;
        dispatch(deleteUserPermanentlySuccess(user));
      })
      .catch((error) => {
        dispatch(deleteUserPermanentlyFailure(error));
      });
  };
};

export const signInUser = (user) => {
  return async (dispatch) => {
    await dispatch(signInUserRequest());
    await axios
      .post(API_URL + "/user/signIn", user)
      .then((response) => {
        const user = response.data;
        dispatch(signInUserSuccess(user));
      })
      .catch((error) => {
        dispatch(signInUserFailure(error));
      });
  };
};
export const insertUserRequest = () => {
  return {
    type: INSERT_USER_REQUEST,
  };
};

export const insertUserSuccess = (user) => {
  return {
    type: INSERT_USER_SUCCESS,
    payload: user,
  };
};

export const insertUserFailure = (error) => {
  return {
    type: INSERT_USER_FAILURE,
    payload: error,
  };
};
export const findUserByIdRequest = () => {
  return {
    type: FIND_USER_BY_ID_REQUEST,
  };
};

export const findUserByIdSuccess = (user) => {
  return {
    type: FIND_USER_BY_ID_SUCCESS,
    payload: user,
  };
};

export const findUserByIdFailure = (error) => {
  return {
    type: FIND_USER_BY_ID_FAILURE,
    payload: error,
  };
};
export const findAllUsersRequest = () => {
  return {
    type: FIND_ALL_USERS_REQUEST,
  };
};

export const findAllUsersSuccess = (users) => {
  return {
    type: FIND_ALL_USERS_SUCCESS,
    payload: users,
  };
};

export const findAllUsersFailure = (error) => {
  return {
    type: FIND_ALL_USERS_FAILURE,
    payload: error,
  };
};
export const findAllUsersNotDeletedRequest = () => {
  return {
    type: FIND_ALL_USERS_NOT_DELETED_REQUEST,
  };
};

export const findAllUsersNotDeletedSuccess = (users) => {
  return {
    type: FIND_ALL_USERS_NOT_DELETED_SUCCESS,
    payload: users,
  };
};

export const findAllUsersNotDeletedFailure = (error) => {
  return {
    type: FIND_ALL_USERS_NOT_DELETED_FAILURE,
    payload: error,
  };
};
export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = (user) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};
export const deleteUserPermanentlyRequest = () => {
  return {
    type: DELETE_USER_PERMANENTLY_REQUEST,
  };
};

export const deleteUserPermanentlySuccess = (user) => {
  return {
    type: DELETE_USER_PERMANENTLY_SUCCESS,
    payload: user,
  };
};
export const deleteUserPermanentlyFailure = (error) => {
  return {
    type: DELETE_USER_PERMANENTLY_FAILURE,
    payload: error,
  };
};
export const signInUserRequest = () => {
  return {
    type: SIGN_IN_USER_REQUEST,
  };
};
export const signInUserSuccess = (user) => {
  return {
    type: SIGN_IN_USER_SUCCESS,
    payload: user,
  };
};
export const signInUserFailure = (error) => {
  return {
    type: SIGN_IN_USER_FAILURE,
    payload: error,
  };
};
