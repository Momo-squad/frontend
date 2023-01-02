import { createContext, useState } from "react";

const userContext = createContext();

export default function UserContext({children}){
    const [user, setUser] = useState({
        email: "",
        password: "",  
        role: "user",
    });

    return(
        <userContext.Provider value={[user, setUser]}>
            {children}
        </userContext.Provider>
    )

}