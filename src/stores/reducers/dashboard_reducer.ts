import { createSlice } from "@reduxjs/toolkit";


interface dashboardType {
    tricker: boolean
}
const initialState: dashboardType ={
    tricker: false
}
export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        onClickTricker: (state) => {
            state.tricker = true
        }
    }
})