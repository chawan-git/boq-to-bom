import { combineReducers } from "redux";
import bomReducer from "./bomTable/bomReducer";
import boqReducer from "./boqTable/boqReducer";
import contactReducer from "./contactTable/contactReducer";
import departmentReducer from "./departmentMaster/departmentReducer";
import gstReducer from "./gstTable/gstReducer";
import itemReducer from "./itemMaster/itemReducer";
import machineReducer from "./machineMaster/machineReducer";
import subWorkReducer from "./subWorkMaster/subWorkReducer";
import templateReducer from "./templateTable/templateReducer";
import unitReducer from "./unitMaster/unitReducer";
import vendorReducer from "./vendorMaster/vendorReducer";
import workReducer from "./workMaster/workReducer";

// Author: Ashutosh Rao Chawan U & Suggala Manasvi
// This is the rootReducer which uses the combineReducers method to combine all the reducers, so that it can be passed as a parameter to the redux store.
const rootReducer = combineReducers({
  bomReducer,
  boqReducer,
  contactReducer,
  departmentReducer,
  gstReducer,
  itemReducer,
  machineReducer,
  subWorkReducer,
  templateReducer,
  unitReducer,
  vendorReducer,
  workReducer,
});

export default rootReducer;
