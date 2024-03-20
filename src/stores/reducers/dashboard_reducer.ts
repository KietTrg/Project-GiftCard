import { createSlice } from "@reduxjs/toolkit";


interface dashboardType {
    isShow: boolean;
    
}
const init: dashboardType = {
   isShow: false,
  
}
export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState: init,
    reducers: {
        show(state) {
            state.isShow = state.isShow === false ? true : false;
        }
    },
    
})
export const { show } = dashboardReducer.actions;
export default dashboardReducer.reducer;