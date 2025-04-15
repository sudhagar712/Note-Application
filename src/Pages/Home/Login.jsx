import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../Components/PasswordInput";
import { validateEmail } from "../../utils/helper";

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const handleSubmit = async (e) => {
    e.preventDefault();
       
    if(!validateEmail(email)){
        setError("Please enter a valid email address");
        return;
    }
    if(password.length < 6){
        setError("Password must be at least 6 characters long");
        return;
    }
    setError(null);
    
    // Login Api call here 
}

  return (
    <div className="flex flex-col items-center  justify-center  mt-36 ">
      <div className="bg-white w-96 p-8 rounded border shadow-md ">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl mb-7">Login</h4>
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 text-[10px] mt-2">{error}</p>}
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-semibold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
