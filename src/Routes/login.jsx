import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate  } from "react-router-dom";

//immportin style
import "./login.css"

import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
    let navigate = useNavigate()
    const [user, setUser] = useContext(UserContext);

    //fetch request on datase and check if user true or not (inside handle change)
    //if yes redirect to dasboard
    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(user)
        if (user.email === "farmer@gmail.com" && user.password === "123456"){
          toast.success("Logged in successfully", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light"
          });

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000)
        } else {
          toast.error("Incorrect login credentials", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light"
          });
        }
      }

    return(
      <>
      <div className="login-form-main-wrapper">
        <div className="img-container">
          <img src="../../src/assets/images/login-art.svg" alt="login art" />
        </div>
        <div className="login-form-container">
        <form 
        className="login-form"
        onSubmit={handleLogin}>
        <input 
        onChange={e => setUser({...user, email: e.target.value})}
        type="text"
        placeholder='Enter your email'></input>

        <input 
        onChange={e => setUser({...user, password: e.target.value})}
        type="password"
        placeholder='Enter your password'></input>

        <button
        className="submit-btn"
        type='submit'>Login</button>
      </form>
          <div className="signup-div">
            <p>
              Don't have account? 
              <button onClick={() => navigate("/signup")}>Signup</button>
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