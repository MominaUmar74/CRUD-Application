import {dataReducer} from '../features/data/dataSlice.js'
import { configureStore } from '@reduxjs/toolkit'; 
const store = configureStore(
    {
        reducer:
        {
            data: dataReducer
        }});
export default store;