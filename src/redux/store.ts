import { configureStore } from "@reduxjs/toolkit";
import { studioAdminService } from "./admin/studio.admin.service";
import { localAuthService } from "./auth/local.auth.service";

export const store = configureStore({
  reducer: {
    [studioAdminService.reducerPath]: studioAdminService.reducer,
    [localAuthService.reducerPath]: localAuthService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(studioAdminService.middleware)
      .concat(localAuthService.middleware),
});
