import addFavoritesReducer from "@/src/redux/features/addFavoritesSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    addFavoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;