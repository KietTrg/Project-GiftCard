//node_modules
import { combineReducers } from '@reduxjs/toolkit';
//components
//actions
//selector
import {dashboardReducer} from './reducers/dashboard_reducer'
import { userReducer } from './reducers/user_reducer';
//function
//constants
//styled

const rootReducer = combineReducers({
    dashboard: dashboardReducer.reducer,
    user: userReducer.reducer
})
export default rootReducer;