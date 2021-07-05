import {createSlice} from '@reduxjs/toolkit'
import {getUsers} from '../Actions/usersAction'

const initialState = {
    users:[],
    status : '',
    loading: false
}

const userSlice = createSlice({
    name:'users',
    initialState,
    extraReducers : {
        [getUsers.pending]: (state)=>{
            state.loading = true
        },
        [getUsers.fulfilled]: (state,action)=>{
            state.loading = false
            state.users = action.payload.data
            state.status = action.payload.status
        },
        [getUsers.rejected]:(state,action)=>{
            state.status = action.payload.status
        }
    }

})

export default userSlice.reducer

// export const {getUsers} = userSlice.actions