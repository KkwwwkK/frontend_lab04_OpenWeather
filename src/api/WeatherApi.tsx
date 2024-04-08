import {GetAllData} from "../data/OpenWeather/WeatherData.tsx";
import axios from "axios";
// import {AxiosResponse} from "axios";


export const getAllWeatherData = (handleGetAllWeatherData:(responseData:GetAllData)=>void):void=>{
    axios.get<GetAllData>("https://api.openweathermap.org/data/2.5/forecast?id=1819730&units=metric&appid=f8ba9513601487197892e3ea530de855&cnt=6")
        .then((response)=>{
            handleGetAllWeatherData(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })

}

