// import styles
import "./dashboard.css"

export const Dashboard = ({sidebar, component}) => {
    return(
        <>
        <div className="wrapper">
            <div className="dashboard">
                <div className="sidebar">
                {sidebar}
                </div>
                <div className="main">
                    {component}
                </div>
            </div>
        </div>
        </>
    )
}