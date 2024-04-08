import React from "react";
import {Container} from "react-bootstrap";
import OWTable from "../../component/OWTable.tsx";
import OWHead from "../../component/OWHead.tsx";
// import mockData from "./response.json";
import {GetAllData} from "../../../data/OpenWeather/WeatherData.tsx";
import * as WeatherApi from "../../../api/WeatherApi.tsx"

type Props ={
    //
}

type State = {
    getAllData: GetAllData | undefined;
}
export default class OWPage extends React.Component<Props, State>{
    constructor(props:Props) {
        super(props);
        this.state = {
            getAllData: undefined
        }
    }

    handleGetAllWeatherData = (responseData: GetAllData) => {
        this.setState({
                getAllData: responseData
            }
        )
    }

    componentDidMount() {
        WeatherApi.getAllWeatherData(this.handleGetAllWeatherData)
    }

    // componentDidMount() {
    //     this.setState({
    //         getAllData: mockData
    //         }
    //     )
    // }

    render(){
        return(
            <Container>
                <OWHead/>
                {
                    this.state.getAllData &&
                    <OWTable getAllDataList={this.state.getAllData.list}/>
                }
            </Container>
        )
    }

}