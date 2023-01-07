import "../styles/home.css"
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
        <div className="dashboard-home">
            <label htmlFor="#" className="content-header">Dashboard</label>
            <div className="left">
                <div className="alert-system"></div>
            </div>
            <div className="right">
                <div className="weather-container"></div>
                <div className="news-container"></div>
            </div>
        </div>
    )
}

export default UserHome;