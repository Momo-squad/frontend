import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//importing Forum Components
import { Feed } from "./components/Feed"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { Sidebar } from "./components/Sidebar"

export const Forum = () => {
    return (
        <>
        <div className="wrapper">
            <div className="forum">
                <Navbar />
                {/* <Profile />
                <Feed />
                <Sidebar /> */}
            </div>
        </div>
        </>
    )
}