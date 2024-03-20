import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig  = {
  key: 'root',
  storage,
};
const persisReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
   reducer: persisReducer,
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