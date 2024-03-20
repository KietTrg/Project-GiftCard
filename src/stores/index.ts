import { dashboardReducer } from "./reducers/dashboard_reducer";
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
const store = configureStore({
   reducer: {
      dashboard: dashboardReducer.reducer,
   },
   devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
})
export default store;
export type RootState = ReturnType<typeof rootReducer>;