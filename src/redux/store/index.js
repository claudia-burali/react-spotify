import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import songReducer from "../reducers/song";
import queryUser from "../reducers/query";

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  song: songReducer,
  query: queryUser,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
