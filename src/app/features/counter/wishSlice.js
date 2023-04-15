import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  items: [],
};

export const wishSlice = createSlice({
  name: 'wishBag',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeToWishList: (state, action) => {
      let index = state.items.findIndex(
        (film) => film.id === action.payload.id
      );
      let newWishList = [...state.items];
      if (index >= 0) {
        newWishList.splice(index, 1);
      } else {
        console.warn(
          `Il film (id: ${action.payload.id}) non può essere rimosso`
        );
      }
      state.items = newWishList;
    },
  },
});

export const { addToWishList, removeToWishList } = wishSlice.actions;
export const selectItems = (state) => state.wishBag.items;

export default wishSlice.reducer;
