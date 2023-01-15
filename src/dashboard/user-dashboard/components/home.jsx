import "../styles/home.css"
import sunnyDay from "../assets/sunny-day.png"
import { useState, useContext, useCallback} from "react";
import axios from "axios"

import useGeoLocation from "./useGeolocation";

 import { useQuery, useMutation, useQueryClient } from 'react-query';

//importing userHomeContext
import { UserHomeContext } from "../../../context/userHome";
import { useEffect } from "react";


// async function fetchWeatherData(){ 
//     console.log(`https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${coordinates.latitude},${coordinates.longitude}&subscription-key=St_exwgqnSBjiPVn9CSm82_i_K9Wd9whyWnBy38M-0I`)
//     const res = await axios({
//         method: 'get',
//         url: `https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${position.coords.latitude},${position.coords.longitude}&subscription-key=St_exwgqnSBjiPVn9CSm82_i_K9Wd9whyWnBy38M-0I`,
//         headers: { }
//     });
    
//     let data = await res.data;
//     let to_be_push_data = {
//         temperature: data.results[0].temperature.value.toFixed(0),
//         phrase: data.results[0].phrase,
//         isDayTime: data.results[0].isDayTime,
//         wind: `${data.results[0].wind.speed.value} ${data.results[0].wind.speed.unit}`,
//         pressure: `${data.results[0].pressure.value} ${data.results[0].pressure.unit}`,
//         uvIndex: data.results[0].uvIndex,
//         uvIndexPhrase: data.results[0].uvIndexPhrase,
//         precipitation: `${data.results[0].precipitationSummary.pastHour.value} ${data.results[0].precipitationSummary.pastHour.unit}`,
//         humidity: data.results[0].relativeHumidity
//     };
    
//     console.log(to_be_push_data)
//     return to_be_push_data;
// }

const UserHome = () => {
    // Access the client
    const queryClient = useQueryClient();
    const location = useGeoLocation();

    const { isLoading, data: weatherData,  isError, isFetching, isFetched} = useQuery({
        queryKey: ['weatherData'],
        queryFn: fetchWeatherData,
        retry: true
    });

    if (isLoading) console.log("loading")
    if (isError) console.log("error")
    if (isFetched) console.log("already fetched")
    if (isFetching) console.log("is fetching")

    console.log(location)

    async function fetchWeatherData(){ 
        return new Promise((resolve, reject) => {
            if (location.loaded === true){
                resolve("resolved")
            }
            reject("rejected")
        })
        // if (location.loaded === true){
        //     console.log(`https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${location.coordinates.lat},${location.coordinates.lng}&subscription-key=St_exwgqnSBjiPVn9CSm82_i_K9Wd9whyWnBy38M-0I`)
        //     return "hello world"
        //     // const res = await axios({
        //     //     method: 'get',
        //     //     url: `https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=${position.coords.latitude},${position.coords.longitude}&subscription-key=St_exwgqnSBjiPVn9CSm82_i_K9Wd9whyWnBy38M-0I`,
        //     //     headers: { }
        //     // });
            
        //     // let data = await res.data;
        //     // let to_be_push_data = {
        //     //     temperature: data.results[0].temperature.value.toFixed(0),
        //     //     phrase: data.results[0].phrase,
        //     //     isDayTime: data.results[0].isDayTime,
        //     //     wind: `${data.results[0].wind.speed.value} ${data.results[0].wind.speed.unit}`,
        //     //     pressure: `${data.results[0].pressure.value} ${data.results[0].pressure.unit}`,
        //     //     uvIndex: data.results[0].uvIndex,
        //     //     uvIndexPhrase: data.results[0].uvIndexPhrase,
        //     //     precipitation: `${data.results[0].precipitationSummary.pastHour.value} ${data.results[0].precipitationSummary.pastHour.unit}`,
        //     //     humidity: data.results[0].relativeHumidity
        //     // };
            
        //     // console.log(to_be_push_data)
        //     // return to_be_push_data;
        // } else {
        //     throw new Error()
        // }
    }

    console.log(weatherData)

    return(
        <>
        <label htmlFor="#" className="content-header">Dashboard</label>
        <div className="dashboard-home">
            <div className="left">
                <div className="alert-system">
                    <label className="internal-div-headers">Critical Alerts</label>
                    <div className="alerts">
                        <div className="alert">
                            <span className="alert-header">
                                <p className="farm-name text-muted">Field</p>
                                <p className="interpunct text-muted">·</p>
                                <small className="generatedAt text-muted">20 min</small>
                            </span>
                            <span className="alert-description">Water Supply in field stopped due to Power cut. Turn on the inverter.</span>
                            <span className="action-btns">
                                <button className="handleAlertBtn">Call Tanker</button>
                            </span>
                        </div>
                        <div className="alert">
                            <span className="alert-header">
                                <p className="farm-name text-muted">Field</p>
                                <p className="interpunct text-muted">·</p>
                                <small className="generatedAt text-muted">20 min</small>
                            </span>
                            <span className="alert-description">Water Supply in field stopped due to Power cut. Turn on the inverter.</span>
                            <span className="action-btns">
                                <button className="handleAlertBtn">Call Tanker</button>
                            </span>
                        </div>
                        <div className="alert">
                            <span className="alert-header">
                                <p className="farm-name text-muted">Field</p>
                                <p className="interpunct text-muted">·</p>
                                <small className="generatedAt text-muted">20 min</small>
                            </span>
                            <span className="alert-description">Water Supply in field stopped due to Power cut. Turn on the inverter.</span>
                            <span className="action-btns">
                                <button className="handleAlertBtn">Call Tanker</button>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="right">
                <div className="weather-container">
                    <div className="img-cotainer">
                        <div>
                            <span className="current-date">20 Jan, 12:30AM</span>
                            <span className="day">Sunday</span>
                        </div>
                        <img src={sunnyDay} alt="sunny day" />
                        <div className="phrase">
                            { weatherData ? weatherData.phrase : ""}
                        </div>
                        <div className="temperature-container">
                            <p className="today-temperature">{weatherData ? weatherData.temperature : ""}</p>
                            <small>°C</small>
                        </div>
                    </div>

                    <div className="forecast-container">
                        <div className="item">
                            <div className="day">Wind Speed</div>
                            <div className="wind">
                                <span>{weatherData ? weatherData.wind : ""}</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="day">Pressure</div>
                            <div className="pressure">
                                <span>{weatherData? weatherData.pressure : ""}</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="day">Precipitation</div>
                            <div className="precipitation">
                                <span>{weatherData ? weatherData.precipitation : ""}</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="day">Relative Humidity</div>
                            <div className="humidity">
                                <span>{weatherData ? weatherData.humidity : ""}</span>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-container">
                    <label className="internal-div-headers">Trending News</label>
                    <div className="scrollable-div">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <small className="news-source text-muted">CNBC Business</small>
                            <p className="news-description">Prices for fertilizer will reduce with new tax regulations</p>
                        </li>
                        <li className="list-group-item">
                            <small className="news-source text-muted">weather.com</small>
                            <p className="news-description">Better be prepared, Strong winds are forecasted for next week</p>
                        </li>
                        <li className="list-group-item">
                            <small className="news-source text-muted">CNBC Business</small>
                            <p className="news-description">Prices for fertilizer will reduce with new tax regulations</p>
                        </li>
                        <li className="list-group-item">
                            <small className="news-source text-muted">CNBC Business</small>
                            <p className="news-description">Prices for fertilizer will reduce with new tax regulations</p>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserHome;