import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

//importing userContext and permission
import UserContext from './context/userContext'

//importing componetns
import { Login } from './Routes/login'
import {Home} from './seller-dashboard/pages/home'

function App() {

  return (
    <UserContext>
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
            <Route path="/dashboard" element={<Home />} />
            {/* common routes for farmer's and seller's dashboard */}
            <Route path="/dashboard/forum" element={<h1>Forum</h1>} />

            {/* routes for farmer's dashboard */}
            <Route path="/dashboard/setup" element={<h1>Dashboard Setup Page</h1>} />
            <Route path="/dashboard/sensors" element={<h1>Sensors Page</h1>} />
            <Route path="/dashboard/soil" element={<h1>Soil Insights Page</h1>} />
            <Route path="/dashboard/disease" element={<h1>Disease Detection Page</h1>} />
            <Route path="/dashboard/sell" element={<h1>Product Sell Page</h1>} />

            {/* routes for seller's dashboard */}
            <Route path="/dashboard/buy" element={<h1>Seller's Buy Page</h1>} />
            <Route path="/dashboard/order" element={<h1>Order Page</h1>} />

            {/* Error 404 page */}
            <Route path="/dashboard/*" element={<h1>Error 404! Page not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  </UserContext>
  )
}

export default App;
