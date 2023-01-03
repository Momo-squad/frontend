import { useEffect, useMemo } from "react";

import "../styles/home.css"
import { useState } from "react";

//importing userHomeContext

const UserHome = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(d => d.json())
        .then(data => {
            console.log(data)
        })
         }, [])
         
    return(
        <>
            <div className="userHome">
                hello this is user's dashbaord
                <br />
                Data: 
            </div>
        </>
    )
}

export default UserHome;