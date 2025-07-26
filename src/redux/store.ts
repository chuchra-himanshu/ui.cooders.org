import { configureStore } from "@reduxjs/toolkit";
import { localAuthService } from "./auth/local.auth.service";
import { tokenAuthService } from "./auth/token.auth.service";
import { socialAuthService } from "./auth/social.auth.service";

export const store = configureStore({
  reducer: {
    [localAuthService.reducerPath]: localAuthService.reducer,
    [tokenAuthService.reducerPath]: tokenAuthService.reducer,
    [socialAuthService.reducerPath]: socialAuthService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(localAuthService.middleware)
      .concat(tokenAuthService.middleware)
      .concat(socialAuthService.middleware),
});
