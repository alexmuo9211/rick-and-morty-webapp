import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
}

export const addFavoritesSlice = createSlice({
  name: "addFavorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      // @ts-ignore
      state.favorites.push(action.payload);
    }
  }
})

export const { addFavorites } = addFavoritesSlice.actions

export default addFavoritesSlice.reducer