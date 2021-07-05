import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../Shared/apiClient';


export const getModules = createAsyncThunk('modules/getModules',async () => {
	
    const response = await apiClient.get('module');
   
    return response;

});

