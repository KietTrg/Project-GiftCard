//node_modules
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
//components
//actions
//selector
import rootReducer from "./rootReducer";
import { dashboardReducer } from './reducers/dashboard_reducer';
import { userReducer } from './reducers/user_reducer';

//function
//constants
//styled

const persistConfig = {
  key: 'root/user',
  storage,
};

const userConfig = {
  ...persistConfig,
  whitelist: ["accessToken"],
};

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer.reducer,
    user: persistReducer(userConfig, userReducer.reducer)
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
})
export default store;
export const persiststore = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
