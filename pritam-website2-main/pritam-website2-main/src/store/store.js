import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import quiz from "./quizSlice";
import common from "./commonSlice";
import user from "./userSlice";

export const store = configureStore({
  reducer: {
    user,
    common,
    cart,
    quiz,
  },
});
