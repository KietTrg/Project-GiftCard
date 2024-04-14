//node_modules
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import { useDispatch } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
//components
//actions
//selector
import nav_slice from './reducers/nav/nav_slice';
import user_slice from './reducers/user/user_slice';
//function
//constants
//styled
const PERSISTED_KEYS: string[] = ["user"]
const persistConfig = {
  key: 'root/user',
  whitelist: PERSISTED_KEYS,
  storage
}
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    nav: nav_slice,
    user: user_slice
  }),
)
let store: ReturnType<typeof makeStore>
export function makeStore(preloadedState: any) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: true,
    preloadedState,
  })
}
export const initializeStore = (preloadedState?: any) => {
  let _store = store ?? makeStore(preloadedState)
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
  }


  if (typeof window === 'undefined') return _store

  if (!store) {
    store = _store
  }

  return _store
}
store = initializeStore()

export default store;
export const persiststore = persistStore(store);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
