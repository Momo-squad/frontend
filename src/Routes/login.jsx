import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { useNavigate  } from "react-router-dom";

export const Login = () => {
    let navigate = useNavigate()
    const [user, setUser] = useContext(UserContext);

    //fetch request on datase and check if user true or not (inside handle change)
    //if yes redirect to dasboard
    const handleChange = (event) => {
        event.preventDefault();
        console.log(user)
          navigate("/dashboard");
      }

    return(
        <form onSubmit={handleChange}>
        <input 
        onChange={e => setUser({...user, email: e.target.value})}
        type="text"
        placeholder='Enter your email'></input>

        <input 
        onChange={e => setUser({...user, password: e.target.value})}
        type="text"
        placeholder='Enter your password'></input>

        <select 
        onChange={e => setUser({...user, role: e.target.value})}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type='submit'>Click</button>
      </form>
    )
}