import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../Components/PasswordInput";

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
}

  return (
    <div className="flex flex-col items-center  justify-center  mt-36 ">
      <div className="bg-white w-96 p-8 rounded border shadow-md ">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl mb-7">Login</h4>
          <input type="text" placeholder="Email" className="input-box" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <PasswordInput value={password}  onChange={(e)=> setPassword(e.target.value)}/>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
