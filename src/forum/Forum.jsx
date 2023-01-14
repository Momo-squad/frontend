import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import "./forum.css"

//importing Forum Components
import { Feed } from "./components/Feed"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { Sidebar } from "./components/Sidebar"
import { FarmDisplay } from "./components/FarmDisplay"

export const Forum = () => {
    return (
        <>
        <div className="wrapper">
            <div className="forum">
            <Navbar />

            <div className="tab-content" id="nav-tabContent">
                <div className="home tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                tabIndex="0">
                    <Sidebar />
                    <Feed />
                    <FarmDisplay />
                </div>

                <div className="tab-pane fade" id="nav-market" role="tabpanel" tabIndex="0">This is Market Stats Tab</div>
                <div className="tab-pane fade" id="nav-dashboard" role="tabpanel" tabIndex="0">This is Dashboard tab</div>
                
                <div
                className="tab-pane fade"
                id="farmap-profile"
                role="tabpanel"
                tabIndex="0">
                    <Profile />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}