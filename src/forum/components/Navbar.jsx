import { useState } from "react"
import "../styles/Navbar.css"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setLoggedStatus] = useState(false)
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
                role="tab">
                    <i className="bi bi-house-door"></i>
                </button>
                <button
                className="items nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-market"
                role="tab">
                    <i className="bi bi-graph-up"></i>
                </button>
                <button
                className="items nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-dashboard"
                role="tab">
                    <i className="bi bi-box-seam"></i>
                </button>
            </div>

            <div className="searchBar">
                <input
                className="search-bar" 
                placeholder="Type here to search.." />
            </div>

            <div className="actionButtons">
                {isLoggedIn && 
                <div className="logedOutBtns">
                    <button 
                    onClick={() => navigate("/login")}
                    className="login active">
                    Login
                    </button>
                    <button
                    onClick={() => navigate("/signup")}
                    className="signup">
                    Signup
                    </button>
                </div>
                }
                
                {!isLoggedIn &&
                <div className="loggedInBtns">
                    <div className="dropdown">
                        <button
                        data-bs-toggle="dropdown"
                        className="chat">
                            <i className="bi bi-chat-left-dots-fill"></i>
                        </button>
                        <div className="dropdown-menu">
                           this is chat dropdown
                        </div>
                    </div>
                
                    <div className="dropdown">
                        <button
                        data-bs-toggle="dropdown"
                        className="notification">
                            <i className="bi bi-bell-fill"></i>
                        </button>
                        <div className="dropdown-menu">
                            this is notification dropdown
                        </div>
                    </div>

                    <button
                    className="profile-btn nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#farmap-profile"
                    role="tab">
                        <i className="bi bi-person-circle"></i>
                    </button>
                </div>
            }
            </div>
            </div>
        </div>
        </>
    )
}