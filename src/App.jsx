import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

//importing userContext and permission
import { UserContext } from './context/userContext'

//importing dashboard
import {Dashboard} from "./dashboard/dashboard"

//importing componetns
import { Login } from './Routes/login'
import { UserSidebar } from './dashboard/user-dashboard/components/sidebar'
import { Sensors } from './dashboard/user-dashboard/components/sensors'

function App() {

  const [user, setUser] = useState({
    email: "",
    password: "",  
    role: "user",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Hello Wolrd</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<h1>Signup</h1>} />
            {/* list out all possible dashboard pages */}
            {/* while rendering those pages component we can
                individually check if it matched for that role
                if yes do shit
                if no Page does not exist!!!!
             */}
            <Route
              path="/dashboard" 
              element={
              <Dashboard 
                sidebar={<UserSidebar active={"home"}/>} 
                component={<h1>This is home page of dashbaord</h1>} /> 
              }/>
            {/* common routes for farmer's and seller's dashboard */}
            <Route path="/dashboard/forum" element={<h1>Forum</h1>} />

            {/* routes for farmer's dashboard */}
            <Route
              path="/dashboard/sensors" 
              element={
              <Dashboard 
                sidebar={<UserSidebar active={"sensors"}/>} 
                component={<Sensors/>} /> 
              }/>

            <Route path="/dashboard/insights" element={<h1>Soil Insights Page</h1>} />
            <Route path="/dashboard/disease" element={<h1>Disease Detection Page</h1>} />
            <Route path="/dashboard/setup" element={<h1>Dashboard Setup Page</h1>} />
            <Route path="/dashboard/profile" element={<h1>Edit Profile Page</h1>} />
            <Route path="/dashboard/sell" element={<h1>Porduct Sell Page</h1>} />

            {/* routes for seller's dashboard */}
            <Route path="/dashboard/buy" element={<h1>Seller's Buy Page</h1>} />
            <Route path="/dashboard/order" element={<h1>Order Page</h1>} />

            {/* Error 404 page */}
            <Route path="/dashboard/*" element={<h1>Error 404! Page not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  </UserContext.Provider>
  )
}

export default App;
