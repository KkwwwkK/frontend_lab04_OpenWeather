export interface GetAllData {
    list: List[];
    // city: City;
}

export interface List {
    dt: number;                // time of data forecasted, maybe used as id
    dt_txt: string;            // Date and time text
    main: {
        temp_min: number;      // Minimum temperature
        temp_max: number;      // Maximum temperature
        humidity: number;      // Humidity
    };
    weather: {
        icon: string;          // Weather icon
    }[];
}

// export interface City {
//     id: number;
//     name: string;
//     coord: Coord;
//     country: string;
//     population: number;
//     timezone: number;
//     sunrise: number;
//     sunset: number;
// }
//
// export interface Coord {
//     lat: number;
//     lon: number;
// }