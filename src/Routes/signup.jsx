import { useContext } from "react";

import { useNavigate  } from "react-router-dom";

//immportin style
import "./login.css"
import { useState } from "react";

import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


export const Signup = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        country: "",
        role: ""
    });

    const handleSignup = (event) => {
        event.preventDefault();
        console.log(user)
        toast.success("Signed up successfully", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light"
          });

          setTimeout(() => {
            navigate("/login");
          }, 2000)
      }

    return(
      <>
      <div className="login-form-main-wrapper">
        <div className="img-container">
          <img src="../../src/assets/images/login-art.svg" alt="signup art" />
        </div>
        <div className="login-form-container">
        <form 
        className="login-form"
        onSubmit={handleSignup}>

        <input 
        onChange={e => setUser({...user, username: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your username'></input>

        <input 
        onChange={e => setUser({...user, fullname: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your full name'></input>

        <input 
        onChange={e => setUser({...user, email: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your email'></input>

        <input 
        onChange={e => setUser({...user, password: e.target.value})}
        type="password"
        required={true}
        placeholder='Enter your password'></input>

        <input 
        onChange={e => setUser({...user, phoneNumber: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your phone number'></input>

        <input 
        onChange={e => setUser({...user, address: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your address'></input>

        <input 
        onChange={e => setUser({...user, country: e.target.value})}
        type="text"
        required={true}
        placeholder='Enter your country'></input>

        <select 
        onChange={e => setUser({...user, role: e.target.value})}>
          <option value="farmer">Farmer</option>
          <option value="seller">Seller</option>
        </select>
        <button
        className="submit-btn"
        type='submit'>Signup</button>
      </form>
          <div className="signup-div">
            <p>
              Don't have account? 
              <button onClick={() => navigate("/login")}>Login</button>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="bottom-main">Copyright &copy; Farmap.com.np</div>
      </footer>
      <ToastContainer />
    </>
    )
}