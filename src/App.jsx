import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./features/data/weatherApi.js";
import { setCity } from "./features/data/dataSlice.js";

export default function WeatherApp() {
  const dispatch = useDispatch();
  const { city, data, status, error } = useSelector((state) => state.data);
  const [input, setInput] = useState("");

  const handleCheck = () => {
    if (input.trim()) {
      dispatch(setCity(input));
      dispatch(fetchWeather(input));
    } else {
      alert("Please enter a city name!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-purple-200 to-indigo-300 flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
      <h1 className="text-4xl font-bold text-center  bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6 drop-shadow-lg">
        Welcome to Weather App
      </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-blue">
          <input
            type="text"
            className="flex-1 border-2 border-white/30 rounded-xl p-4 text-lg  text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 shadow-inner"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city name"
          />
          <button
            onClick={handleCheck}
            className="bg-purple-500 text-white px-6 py-4 rounded-xl hover:bg-purple-600 active:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
          >
            Check
          </button>
        </div>

        {status && (
          <p className="text-center text-white text-lg font-medium animate-pulse">
            Status: {status}
          </p>
        )}

        {data && data.main && (
          <div className="mt-8 w-full max-w-md p-6 bg-gradient-to-br from-teal-500/90 to-purple-600/90 rounded-2xl shadow-xl text-white transform transition-all duration-500 hover:scale-105 border border-white/20">
            <h2 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-md">
              {data.name}, {data.sys.country}
            </h2>
            <p className="capitalize text-xl opacity-95 mb-6 font-medium">
              {data.weather[0].description}
            </p>

            <div className="flex items-center justify-center my-6">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                alt="Weather Icon"
                className="w-28 h-28 drop-shadow-lg animate-pulse-slow"
              />
              <p className="text-7xl font-extrabold ml-4 tracking-tight drop-shadow-md">
                {Math.round(data.main.temp)}°C
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-base">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-md border border-white/20">
                <p className="font-semibold text-teal-100">Humidity</p>
                <p>{data.main.humidity}%</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-md border border-white/20">
                <p className="font-semibold text-teal-100">Wind</p>
                <p>{data.wind.speed} m/s</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-md border border-white/20">
                <p className="font-semibold text-teal-100">Feels Like</p>
                <p>{Math.round(data.main.feels_like)}°C</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-md border border-white/20">
                <p className="font-semibold text-teal-100">Pressure</p>
                <p>{data.main.pressure} hPa</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <p className="text-center text-red-400 text-lg font-medium mt-6 animate-shake drop-shadow-sm">
            Error: {error}
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}