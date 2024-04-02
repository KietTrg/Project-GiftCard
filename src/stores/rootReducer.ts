//node_modules
import { combineReducers } from '@reduxjs/toolkit';
//components
//actions
//selector
import {dashboardReducer} from './reducers/dashboard_reducer'
//function
//constants
//styled
const rootReducer = combineReducers({
    dashboard: dashboardReducer.reducer
})
export default rootReducer;