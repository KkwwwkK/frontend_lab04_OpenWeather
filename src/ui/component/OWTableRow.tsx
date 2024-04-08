import {List} from "../../data/OpenWeather/WeatherData.tsx";

type Props = {
    listData : List;
}

export default function OWTableRow({listData}: Props){
    // Assuming listData.weather is an array of weather objects
    const weatherIcon = listData.weather.length > 0 ? listData.weather[0].icon : "";

    // Convert dt_txt to a JavaScript Date object
    const dateObject = new Date(listData.dt_txt);

    // Format time to HH:mm (e.g., "15:00")
    const formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <tr>
            {/*<td>{listData.dt_txt}</td>*/}
            {/*<td>{listData.dt_txt}</td>*/}
            <td>{new Date(listData.dt_txt).toLocaleDateString()}</td>
            {/*<td>{new Date(listData.dt_txt).toLocaleTimeString()}</td>*/}
            <td>{formattedTime}</td> {/* Display formatted time */}
            <td>{listData.main.temp_min} / {listData.main.temp_max}</td>
            <td>{listData.main.humidity}%</td>
            <td>
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Weather Icon"/>
            </td>
            {/*<td>{weatherIcon}</td>*/}
        </tr>
    )
}