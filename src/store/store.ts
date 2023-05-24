import {
  configureStore,
  AnyAction,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { getMainInfoApi } from "./services/getMainInfo";

const reducers = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [getMainInfoApi.reducerPath]: getMainInfoApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(getMainInfoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducers>;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// if needed for slices
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction // Action<string>
>;
