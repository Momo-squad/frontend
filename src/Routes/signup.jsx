import { useContext } from "react";

import { useNavigate  } from "react-router-dom";

//immportin style
import "./signup.css"
import { useState } from "react";

import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        profileImg: null,
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
      <div className="login-form-main-wrapper signup-wrapper">
        <div className="img-container">
          <img src="../../src/assets/images/login-art.svg" alt="signup art" />
        </div>
        <div className="signup-form-container">
        <form 
        className="login-form"
        onSubmit={handleSignup}>

        <div className="upload-section">
        <div>
        <p className="signup-header">Profile Picture</p>
        {user.profileImg && (
            <div>
            <img
            className="profile-picture"
            alt="not found"
            src={URL.createObjectURL(user.profileImg)} />
            <button
            className="removeUploadedImageAtSignup"
            onClick={()=>{
              setUser({...user, profileImg: null})
            }}>Remove</button>
            </div>
          )}
          {!user.profileImg && 
            <input
            className="uploadImageAtSignup"
            type="file"
            name="myImage"
            required={true}
            onChange={(event) => {
              console.log(event.target.files[0]);
              setUser({...user, profileImg: event.target.files[0]})
            }} />}
    </div>
        </div>
        <div className="input-section">
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
        </div>

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