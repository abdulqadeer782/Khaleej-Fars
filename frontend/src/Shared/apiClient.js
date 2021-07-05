import axios from 'axios'
import { BaseURL } from './BaseURL'


export const apiClient = axios.create({
    baseURL : BaseURL,
    headers: {
        'Accept': 'application/json',   
        'Content-Type': 'application/json',
    }
})

