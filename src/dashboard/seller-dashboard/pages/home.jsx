import { useContext } from "react"
import { UserContext } from "../../../context/userContext"

export const Home = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user)

    return(
        <div>
            Hello {user.email}. This is seller's dashboard.
        </div>
    )
}

