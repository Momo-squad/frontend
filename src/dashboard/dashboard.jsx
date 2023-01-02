import {  useContext } from "react"
import { UserContext } from "../context/userContext"

import {Home} from "../dashboard/seller-dashboard/pages/home";
import {UserHome} from "../dashboard/user-dashboard/components/home"

// import styles
import "./dashboard.css"
import { useMemo } from "react";

export const Dashboard = ({sidebar, component}) => {
    // const memo = useMemo();
    const [user] = useContext(UserContext);
    console.log(user)

    useMemo(() => {fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(d => d.json())
    .then(e => console.log(sidebar._source.lineNumber, e))
    }, []);
    
    return(
        <>
        <div className="wrapper">
            <div className="dashboard">
                <div className="sidebar">
                {sidebar}
                </div>
                <div className="main">
                    {(user.role == "Admin") ? <Home /> : component}
                </div>
            </div>
        </div>
        </>
    )
}