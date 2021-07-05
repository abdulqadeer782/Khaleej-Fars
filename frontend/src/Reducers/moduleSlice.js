import { createSlice} from '@reduxjs/toolkit'
import { getModules } from '../Actions/moduleAction'


const initialState = {
    modules : [],
    status : null,
    loading : false
}

const moduleSlice = createSlice({
    name: 'module',
    initialState,
    extraReducers: {
        [getModules.pending]:(state)=>{
            state.loading = true
        },
        [getModules.fulfilled]:(state,action)=>{
            state.loading = false
            state.modules = action.payload.data
            state.status = action.payload.status
        },
        // [getModules.rejected] : (state,action)=>{
        //     state.status = action.payload.status
        // }
    }
})


export default moduleSlice.reducer
