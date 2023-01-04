import { createContext, useState } from "react";

const UserHomeContext = createContext({
    userHomeData: null,
    setUserHomeData: () => {}
});

const UserHomeContextProvider = ({children}) =>{
    const [userHomeData, setUserHomeData] = useState(null);

    return(
        <UserHomeContext.Provider value={[userHomeData, setUserHomeData]}>
            {children}
        </UserHomeContext.Provider>
    )
}

export {UserHomeContext, UserHomeContextProvider};