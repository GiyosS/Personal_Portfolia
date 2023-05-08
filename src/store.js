import { configureStore } from "@reduxjs/toolkit";

import actionSlice from "./features/actionSlice";
import postsSlice from "./Project_app_structure_data_flow/features/posts/postsSlice";
import usersSlice from "./Project_app_structure_data_flow/features/users/usersSlice";
import slice from "./RegistrationProject/src/store/slice";
import api from "./RegistrationProject/src/store/MiddleWare/Api";

export const store = configureStore({
  reducer: {
    actionSlice,
    users: usersSlice,
    posts: postsSlice,
    slice,
  },
  middleware: [api],
});
