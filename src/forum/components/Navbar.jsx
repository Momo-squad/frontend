import { useEffect, useState, useContext } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { UserContext } from "../../context/userContext";
import { config } from "../../config";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedStatus] = useState(false);
  const [newNotifications, setNewNotifications] = useState(0);
  const [notifications, setNotifications] = useState([])
  const { user } = useContext(UserContext);
  let ws;

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setLoggedStatus(true);
    } else {
      setLoggedStatus(false);
    }
  }, []);

  useEffect(() => {
    async function createWsConnection() {
      if (user._id) {
        const res = await fetch(`${config.API_URL}/negotiate?id=${user._id}`);
        const data = await res.json();
        ws = new WebSocket(data.url);

        ws.addEventListener("message", (data) => {
          let msg = JSON.parse(data.data);

          if (msg.data.user_id !== user._id) {
            return;
          }
          setNewNotifications(prev => prev + 1)
          if(msg.event === "followed") {
            setNotifications(prev => [{ text: `${msg.followed_by} followed you`, profile_pic: msg.profile_pic, date: (new Date(msg.createdAt).toLocaleString()) }, ...prev]);

            console.log(notifications)
          }

        });
      }
    }

    createWsConnection();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    navigate("/login");
  };

  const handleRedirectToDashboard = () => {
    let userInfo = localStorage.getItem("userInfo");

    if (!userInfo) {
      return navigate("/login");
    }

    userInfo = JSON.parse(userInfo);
    if (userInfo.role === "user") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard/seller");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="brand">
          <h3>Farmap</h3>
        </div>

        <div className="center nav nav-pills">
          <div className="left">
            <button
              className="items nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              role="tab"
            >
              <i className="bi bi-house-door"></i>
            </button>
            <button
              className="items nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-market"
              role="tab"
            >
              <i className="bi bi-graph-up"></i>
            </button>
            <button
              className="items nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-dashboard"
              role="tab"
              onClick={handleRedirectToDashboard}
            >
              <i className="bi bi-box-seam"></i>
            </button>
          </div>

          <div className="searchBar">
            <input className="search-bar" placeholder="Type here to search.." />
          </div>

          <div className="actionButtons">
            {!isLoggedIn && (
              <div className="logedOutBtns">
                <button
                  onClick={() => navigate("/login")}
                  className="login active"
                >
                  Login
                </button>
                <button
                  onClick={() => window.open("/navigate")}
                  className="signup"
                >
                  Signup
                </button>
              </div>
            )}

            {isLoggedIn && (
              <div className="loggedInBtns">
                <div className="dropdown">
                  <button data-bs-toggle="dropdown" className="chat">
                    <i className="bi bi-chat-left-dots-fill"></i>
                  </button>
                  <div className="dropdown-menu">this is chat dropdown</div>
                </div>

                <div className="dropdown">
                  <button data-bs-toggle="dropdown" className="notification" onClick={() => setNewNotifications(0)}>
                    <i className="bi bi-bell-fill"></i>
                    <span
                      class="position-absolute top-0 start-100 
                    translate-middle badge rounded-pill bg-danger"
                    >
                      {newNotifications}
                    </span>
                  </button>
                  <div
                    className="dropdown-menu"
                    style={{ overflowY: "scroll" }}
                  >
                    <Notification />
                  </div>
                </div>

                <button
                  className="profile-btn nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#farmap-profile"
                  role="tab"
                >
                  <i className="bi bi-person-circle"></i>
                </button>

                <button
                  className="profile-btn nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#farmap-profile"
                  role="tab"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
