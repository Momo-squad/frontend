import "../styles/sidebar.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

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
                <button className="item active" onClick={() => Navigate("/dashboard")}>
                    <i className="bi bi-box-seam"></i>
                    Dashboard
                </button>
                <button className="item" onClick={() => Navigate("/dashboard/forum")}>
                    <i className="bi bi-menu-up"></i>
                    Forum
                </button>
                <button className="item" onClick={() => Navigate("/dashboard/sensors")}>
                    <i className="bi bi-cpu"></i>
                    Sensors
                </button>
                <button className="item" onClick={() => Navigate("/dashboard/insights")}>
                    <i className="bi bi-bar-chart"></i>
                    Insights
                </button>
                <button className="item" onClick={() => Navigate("/dashboard/sell")}>
                    <i className="bi bi-cart"></i>
                    P2P
                </button>
                <button className="item mb-5" onClick={() => Navigate("/dashboard/disease")}>
                    <i className="bi bi-bug"></i>
                    Disease
                </button>

                <label htmlFor="#" className="label">Setup</label>
                <button className="item mb-4" onClick={() => Navigate("/dashboard/setup")}>
                    <i className="bi bi-house-add"></i>
                    Manage
                </button>

                <label htmlFor="#" className="label">Account</label>
                <button className="item" onClick={() => Navigate("/dashboard/profile")}>
                    <i className="bi bi-person"></i>
                    Edit Profle
                </button>
            </div>
        </div>
        </>
    )
}