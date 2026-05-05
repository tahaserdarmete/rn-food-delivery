import {configureStore} from "@reduxjs/toolkit";
import restaurantSlice from "./slices/RestaurantSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
