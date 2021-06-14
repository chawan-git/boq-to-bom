// Author: Ashutosh Rao Chawan & Suggala Manasvi
import axios from "axios";
import {
  INSERT_TEMPLATE_SUCCESS,
  INSERT_TEMPLATE_REQUEST,
  INSERT_TEMPLATE_FAILURE,
  FIND_TEMPLATE_BY_ID_REQUEST,
  FIND_TEMPLATE_BY_ID_SUCCESS,
  FIND_TEMPLATE_BY_ID_FAILURE,
  FIND_TEMPLATE_BY_BOQ_REQUEST,
  FIND_TEMPLATE_BY_BOQ_SUCCESS,
  FIND_TEMPLATE_BY_BOQ_FAILURE,
  FIND_ALL_TEMPLATES_REQUEST,
  FIND_ALL_TEMPLATES_SUCCESS,
  FIND_ALL_TEMPLATES_FAILURE,
  UPDATE_TEMPLATE_REQUEST,
  UPDATE_TEMPLATE_SUCCESS,
  UPDATE_TEMPLATE_FAILURE,
  DELETE_TEMPLATE_REQUEST,
  DELETE_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE_FAILURE,
  DELETE_TEMPLATE_PERMANENTLY_REQUEST,
  DELETE_TEMPLATE_PERMANENTLY_SUCCESS,
  DELETE_TEMPLATE_PERMANENTLY_FAILURE,
} from "./templateTypes";
const API_URL = "http://boqtobom.aqsaindia.com/api/v1/";

// Method used to insert templates to the database through the springBoot API
export const insertTemplate = (template) => {
  return async (dispatch) => {
    await dispatch(insertTemplateRequest());
    await axios
      .post(API_URL + "/template/insertTemplate", template)
      .then((response) => {
        const template = response.data;
        dispatch(insertTemplateSuccess(template));
      })
      .catch((error) => {
        dispatch(insertTemplateFailure(error));
      });
  };
};

// Method used to fetch a single template based on ID
export const findTemplateById = (id) => {
  return async (dispatch) => {
    await dispatch(findTemplateByIdRequest());
    await axios
      .get(API_URL + "/template/findTemplateById/" + id)
      .then((response) => {
        // response.data is the users
        const template = response.data;
        dispatch(findTemplateByIdSuccess(template));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findTemplateByIdFailure(error));
      });
  };
};

// Method used to fetch a single template based on name
export const findTemplateByBOQ = (machine, work, subWork) => {
  return async (dispatch) => {
    await dispatch(findTemplateByBOQRequest());
    await axios
      .get(API_URL + "/template/findTemplateByBOQ/", machine, work, subWork)
      .then((response) => {
        // response.data is the users
        const template = response.data;
        dispatch(findTemplateByBOQSuccess(template));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findTemplateByBOQFailure(error));
      });
  };
};

// Method used to find all the templates from the database using the SpringBoot API
export const findAllTemplates = () => {
  return async (dispatch) => {
    await dispatch(findAllTemplatesRequest());
    await axios
      .get(API_URL + "/templates/findAllTemplates")
      .then((response) => {
        // response.data is the users
        const templates = response.data;
        dispatch(findAllTemplatesSuccess(templates));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(findAllTemplatesFailure(error));
      });
  };
};

// Method used to update the template details in the database through the springBoot API
export const updateTemplate = (template) => {
  return async (dispatch) => {
    await dispatch(updateTemplateRequest());
    await axios
      .put(API_URL + "/template/updateTemplate", template)
      .then((response) => {
        const template = response.data;
        dispatch(updateTemplateSuccess(template));
      })
      .catch((error) => {
        dispatch(updateTemplateFailure(error));
      });
  };
};

// Method used to delete an template from the database through the SpringBoot API
export const deleteTemplate = (template) => {
  return async (dispatch) => {
    await dispatch(deleteTemplateRequest());
    await axios
      .delete(API_URL + "/template/deleteTemplate", template)
      .then((response) => {
        const template = response.data;
        dispatch(deleteTemplateSuccess(template));
      })
      .catch((error) => {
        dispatch(deleteTemplateFailure(error));
      });
  };
};

// Method used to delete an template from the database through the SpringBoot API
export const deleteTemplatePermanently = (template) => {
  return async (dispatch) => {
    await dispatch(deleteTemplatePermanentlyRequest());
    await axios
      .delete(API_URL + "/template/deleteTemplatePermanently", template)
      .then((response) => {
        const template = response.data;
        dispatch(deleteTemplatePermanentlySuccess(template));
      })
      .catch((error) => {
        dispatch(deleteTemplatePermanentlyFailure(error));
      });
  };
};

export const insertTemplateRequest = () => {
  return {
    type: INSERT_TEMPLATE_REQUEST,
  };
};

export const insertTemplateSuccess = (template) => {
  return {
    type: INSERT_TEMPLATE_SUCCESS,
    payload: template,
  };
};

export const insertTemplateFailure = (error) => {
  return {
    type: INSERT_TEMPLATE_FAILURE,
    payload: error,
  };
};

export const findTemplateByIdRequest = () => {
  return {
    type: FIND_TEMPLATE_BY_ID_REQUEST,
  };
};

export const findTemplateByIdSuccess = (template) => {
  return {
    type: FIND_TEMPLATE_BY_ID_SUCCESS,
    payload: template,
  };
};

export const findTemplateByIdFailure = (error) => {
  return {
    type: FIND_TEMPLATE_BY_ID_FAILURE,
    payload: error,
  };
};

export const findTemplateByBOQRequest = () => {
  return {
    type: FIND_TEMPLATE_BY_BOQ_REQUEST,
  };
};

export const findTemplateByBOQSuccess = (template) => {
  return {
    type: FIND_TEMPLATE_BY_BOQ_SUCCESS,
    payload: template,
  };
};

export const findTemplateByBOQFailure = (error) => {
  return {
    type: FIND_TEMPLATE_BY_BOQ_FAILURE,
    payload: error,
  };
};

export const findAllTemplatesRequest = () => {
  return {
    type: FIND_ALL_TEMPLATES_REQUEST,
  };
};

export const findAllTemplatesSuccess = (template) => {
  return {
    type: FIND_ALL_TEMPLATES_SUCCESS,
    payload: template,
  };
};

export const findAllTemplatesFailure = (error) => {
  return {
    type: FIND_ALL_TEMPLATES_FAILURE,
    payload: error,
  };
};

export const updateTemplateRequest = () => {
  return {
    type: UPDATE_TEMPLATE_REQUEST,
  };
};

export const updateTemplateSuccess = (template) => {
  return {
    type: UPDATE_TEMPLATE_SUCCESS,
    payload: template,
  };
};

export const updateTemplateFailure = (error) => {
  return {
    type: UPDATE_TEMPLATE_FAILURE,
    payload: error,
  };
};

export const deleteTemplateRequest = () => {
  return {
    type: DELETE_TEMPLATE_REQUEST,
  };
};

export const deleteTemplateSuccess = (template) => {
  return {
    type: DELETE_TEMPLATE_SUCCESS,
    payload: template,
  };
};

export const deleteTemplateFailure = (error) => {
  return {
    type: DELETE_TEMPLATE_FAILURE,
    payload: error,
  };
};

export const deleteTemplatePermanentlyRequest = () => {
  return {
    type: DELETE_TEMPLATE_PERMANENTLY_REQUEST,
  };
};

export const deleteTemplatePermanentlySuccess = (template) => {
  return {
    type: DELETE_TEMPLATE_PERMANENTLY_SUCCESS,
    payload: template,
  };
};

export const deleteTemplatePermanentlyFailure = (error) => {
  return {
    type: DELETE_TEMPLATE_PERMANENTLY_FAILURE,
    payload: error,
  };
};
