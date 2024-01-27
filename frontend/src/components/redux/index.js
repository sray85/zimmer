import { combineReducers } from "@reduxjs/toolkit";
import userDataSlicer from "./userData.js";
import navbarBtnStatusSlicer from "./navbarOption";
import searchOption from "./searchOption.js";
import addZimerData from "./zimmerData.js";
import ClientsResevationSlice from "./clientResevation.js";

const AllReducers = combineReducers({
  userdata: userDataSlicer,
  btnSelecttion: navbarBtnStatusSlicer,
  searchTo: searchOption,
  zimmerdata: addZimerData,
  clientsresevation: ClientsResevationSlice,
});

export default AllReducers;
