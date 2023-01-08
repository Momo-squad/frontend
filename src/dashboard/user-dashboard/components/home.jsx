import "../styles/home.css"
import sunnyDay from "../assets/sunny-day.png"
import { useState, useContext } from "react";

//importing userHomeContext
import { UserHomeContext } from "../../../context/userHome";

function fetchData(setUserHomeData){
    console.log("fetching...")
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(d => d.json())
    .then(data => {
        console.log(data)
        setUserHomeData(data)
        return data
    })
}

const UserHome = () => {
    const [userHomeData, setUserHomeData] = useContext(UserHomeContext);
    console.log({prev: userHomeData})
    if (userHomeData == {} || userHomeData == null){
        fetchData(setUserHomeData);
    }

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
                        <div className="temperature-container">
                            <p className="today-temperature">27</p>
                            <small>°C</small>
                        </div>
                    </div>

                    <div className="forecast-container">
                        <div className="item">
                            <div className="day">Monday</div>
                            <div className="temperature">
                                <span className="maxTemperature">21°</span>
                                <span className="minTemperature">13°</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="day">Tuesday</div>
                            <div className="temperature">
                                <span className="maxTemperature">25°</span>
                                <span className="minTemperature">18°</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="day">Wednesday</div>
                            <div className="temperature">
                                <span className="maxTemperature">24°</span>
                                <span className="minTemperature">17°</span>
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