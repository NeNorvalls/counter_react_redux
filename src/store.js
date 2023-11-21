import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/reducers/counterReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
