import "../styles/sidebar.css"
import { useNavigate } from "react-router-dom";

export const UserSidebar = ({active}) => {
    const Navigate = useNavigate();

    return(
        <>
        <div className="sidebar">
            <div className="brandLogo">
                Farmap
            </div>
            <div className={`sidebar-menu ${active}`}>
                <label htmlFor="#" className="label">Reports</label>
                <button className="item home" onClick={() => Navigate("/dashboard")}>
                    <i className="bi bi-box-seam"></i>
                    Dashboard
                </button>
                <button className="item operations" onClick={() => Navigate("/dashboard/operations")}>
                    <i className="bi bi-menu-up"></i>
                    Operations
                </button>
                <button className="item sensors" onClick={() => Navigate("/dashboard/sensors")}>
                    <i className="bi bi-cpu"></i>
                    Sensors
                </button>

                <button
                className="item insights"
                data-bs-toggle="collapse"
                data-bs-target="#insightsCollapse" 
                onClick={() => Navigate("/dashboard/insights")}>
                    <i className="bi bi-bar-chart"></i>
                    Insights
                </button>

                {/* nested button for insights page */}
                <div className="collapse multi-collapse" id="insightsCollapse">
                    <button className="item reports" onClick={() => Navigate("/dashboard/insights/reports")}>
                        <i className="bi bi-cart"></i>
                        Reports
                    </button>
                </div>

                <button className="item sell" onClick={() => Navigate("/dashboard/sell")}>
                    <i className="bi bi-cart"></i>
                    P2P
                </button>
                <button className="item disease mb-5" onClick={() => Navigate("/dashboard/disease")}>
                    <i className="bi bi-bug"></i>
                    Disease
                </button>

                <label htmlFor="#" className="label">Setup</label>
                <button className="item setup mb-4" onClick={() => Navigate("/dashboard/setup")}>
                    <i className="bi bi-house-add"></i>
                    Manage
                </button>

                <label htmlFor="#" className="label">Account</label>
                <div className="dropdown">
                    <button
                    data-bs-toggle="dropdown"
                    className="item profile">
                        <i className="bi bi-gear"></i>
                        Settings
                    </button>
                    <ul className="dropdown-menu">
                        <li><button
                        className="dropdown-item"
                        onClick={() => Navigate("/dashboard/profile")}>
                            Edit profile
                        </button></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}