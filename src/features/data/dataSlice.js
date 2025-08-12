import {createSlice} from '@reduxjs/toolkit';
import {fetchWeather} from './weatherApi.js';
const initialState =
{
   data:null, status:false ,error:null
};
const dataSlice = createSlice(
    {
        name:"data",
        initialState,
        reducers:
        {

       setCity:(state,action)=>{
        state.data=action.payload

       }

        },
        extraReducers: (builder)=>
        {
            builder
            .addCase(fetchWeather.pending,(state)=>
            {
                state.status=true;

            })
             .addCase(fetchWeather.fulfilled,(state,action)=>
            {
                state.status=false;
                state.data=action.payload;
                
            })
             .addCase(fetchWeather.rejected,(state,action)=>
            {
                state.status=false;
                state.error = action.error.message;
                
            })
}
    
    }
    );
    export const {setCity}=dataSlice.actions;
    export const dataReducer=dataSlice.reducer;