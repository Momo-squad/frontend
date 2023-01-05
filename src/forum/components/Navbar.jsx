import { useState } from "react"
import "../styles/Navbar.css"

export const Navbar = () => {
    const [isLoggedIn, setLoggedStatus] = useState(false)
    return (
        <>
        <div className="navbar">
            <div className="brand">
                <h3>Farmap</h3>
            </div>

            <div className="center nav nav-pills">
                <button
                className="items nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                role="tab">
                    <i className="bi bi-house-door-fill"></i>
                </button>
                <button
                className="items nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-qna"
                role="tab">
                    <i className="bi bi-question-square"></i>
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

            <div className="searchBar">
                <input
                className="search-bar" 
                placeholder="Type here to search.." />
            </div>

            <div className="actionButtons">
                {isLoggedIn && 
                <div className="logedOutBtns">
                    <button 
                    className="login active">
                    Signup
                    </button>
                    <button className="signup">
                    Signup
                    </button>
                </div>
                }
                
                <div className="loggedInBtns">
                    <button className="chat">
                        <i className="bi bi-chat-left-dots-fill"></i>
                    </button>
                    <button className="notification">
                        <i className="bi bi-bell-fill"></i>
                    </button>
                    <button
                    className="profile-btn nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#farmap-profile"
                    role="tab">
                        <i className="bi bi-person-circle"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}