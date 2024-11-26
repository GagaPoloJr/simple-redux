import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./state/counter/counterSlice";
import { contactSlice } from "./state/contact";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    contact: contactSlice.reducer,
  },
});

// to infer the rootstate from the state object
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
