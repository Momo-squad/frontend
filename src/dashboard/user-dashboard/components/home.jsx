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
        <>
            <div className="userHome">
                hello this is user's dashbaord
                <br />
                Data: {userHomeData && userHomeData.id}
            </div>
        </>
    )
}

export default UserHome;