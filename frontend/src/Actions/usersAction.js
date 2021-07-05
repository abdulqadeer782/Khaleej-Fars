import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { apiClient } from '../Shared/apiClient'




export const getUsers = createAsyncThunk('users/getUsers',async () => {
	
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    
    return response
    
});

