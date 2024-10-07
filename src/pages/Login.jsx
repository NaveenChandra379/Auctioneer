import Header from "../components/Header";
import "../styles/style.css"
import { useState } from "react";
const Login = () =>{

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {

        e.preventDefault();
        console.log("logged in succesfully" , loginData);

      }
    return (
        <>
        <Header />
            
            <div className="flex justify-center items-center  bg-gray-200 ml-10 mr-10 h-[500px]">
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-3 mb-5 ml-5 mr-5  ">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
            <div className="mb-4">
          <label className="label-style">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="jane@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label className="label-style">password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="jane@gmail.com"
          />
        </div>
                    <button
                    type="submit"
                       className="w-full bg-black text-white py-2 px-4 rounded-lg  transition"
                    >submit</button>
                    
                </form>
            </div>
        </>
    )
} 

export default Login;