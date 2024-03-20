import { combineReducers } from '@reduxjs/toolkit';
import {dashboardReducer} from './reducers/dashboard_reducer'
const rootReducer = combineReducers({
    dashboard: dashboardReducer.reducer
})
export default rootReducer;