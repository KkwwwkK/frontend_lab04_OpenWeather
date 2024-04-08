import {Table} from "react-bootstrap";
import OWTableRow from "./OWTableRow.tsx";
import {List} from "../../data/OpenWeather/WeatherData.tsx";
// import React from "react";

type Props = {
    getAllDataList: List[]
}

export default function OWTable({getAllDataList}: Props){
    return(
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature(Min/Max)</th>
                <th>Humidity(%)</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody>
            {
                getAllDataList.map((value) => (
                <OWTableRow key={value.dt} listData={value} />
            ))
            }
            </tbody>
        </Table>
    )

}