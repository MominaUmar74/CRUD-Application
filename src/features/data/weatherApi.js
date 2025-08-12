import {createAsyncThunk} from '@reduxjs/toolkit';
const API_KEY = "cab5e6817f15f55c009eb9051f84f617";

export const fetchWeather=createAsyncThunk("data/fetchWeather",


    async (city)=>{  const res= await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
       const  data=await res.json();
        return data;
    }
)
