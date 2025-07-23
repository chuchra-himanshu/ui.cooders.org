import { configureStore } from "@reduxjs/toolkit";
import { studioAdminService } from "./admin/studio.admin.service";

export const store = configureStore({
  reducer: {
    [studioAdminService.reducerPath]: studioAdminService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studioAdminService.middleware),
});
