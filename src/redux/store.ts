import { configureStore } from "@reduxjs/toolkit";
import { studioAdminService } from "./admin/studio.admin.service";
import { localAuthService } from "./auth/local.auth.service";
import { tokenAuthService } from "./auth/token.auth.service";
import { socialAuthService } from "./auth/social.auth.service";

export const store = configureStore({
  reducer: {
    [studioAdminService.reducerPath]: studioAdminService.reducer,
    [localAuthService.reducerPath]: localAuthService.reducer,
    [tokenAuthService.reducerPath]: tokenAuthService.reducer,
    [socialAuthService.reducerPath]: socialAuthService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(studioAdminService.middleware)
      .concat(localAuthService.middleware)
      .concat(tokenAuthService.middleware)
      .concat(socialAuthService.middleware),
});
