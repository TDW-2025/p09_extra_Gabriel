import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
