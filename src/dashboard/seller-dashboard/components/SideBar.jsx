import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

export const SellerSidebar = ({ active }) => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="sidebar">
        <div className="brandLogo">Farmap</div>
        <div className={`sidebar-menu ${active}`}>
          <label htmlFor="#" className="label">
            Reports
          </label>
          <button
            className="item home"
            onClick={() => Navigate("/dashboard/seller")}
          >
            <i className="bi bi-box-seam"></i>
            <p>Dashboard</p>
          </button>

          {/* nested button for insights page */}
          <div className="collapse multi-collapse" id="insightsCollapse">
            <button
              className="item reports"
              onClick={() => Navigate("/dashboard/insights/reports")}
            >
              <i className="bi bi-clipboard2-data"></i>
              <p>Reports</p>
            </button>
          </div>

          <button
            className="item sell"
            onClick={() => Navigate("/dashboard/seller/p2p")}
          >
            <i className="bi bi-cart"></i>
            <p>P2P</p>
          </button>

          <button
            className="item sell"
            onClick={() => Navigate("/dashboard/seller/orders")}
          >
            <i className="bi bi-cart"></i>
            <p>Orders</p>
          </button>

          <label htmlFor="#" className="label">
            Setup
          </label>
          <button
            className="item setup mb-4"
            onClick={() => Navigate("/dashboard/seller/manage")}
          >
            <i className="bi bi-house-add"></i>
            <p>Manage</p>
          </button>

          <label htmlFor="#" className="label">
            Account
          </label>

          <button className="item setup mb-4" onClick={() => Navigate("/")}>
            <i class="bi bi-rss"></i>
            <p>Forum</p>
          </button>
          <div className="dropdown">
            <button data-bs-toggle="dropdown" className="item profile">
              <i className="bi bi-gear"></i>
              <p>Settings</p>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => Navigate("/dashboard/seller/profile")}
                >
                  Edit profile
                </button>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
