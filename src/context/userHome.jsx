import { createContext, useState } from "react";

const userHomeContext = createContext({
    userHomeData: {},
    setUserHomeData: () => {}
});

export const UserHomeContext = ({children}) =>{
    const [userHomeData, setUserHomeData] = useState(null);

    return(
        <userHomeContext.Provider value={[userHomeData, setUserHomeData]}>
            {children}
        </userHomeContext.Provider>
    )
}