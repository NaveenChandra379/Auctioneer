import { useState } from "react";
import Header from "../components/Header";
import "../styles/style.css"
const Verification = () => {
    const [otp , setOtp] =useState(new Array(6).fill(""));
    const email ="heybob@gmail.com";

    const handleChange = (element , index) => {

        if(isNaN(element.value)) return;

        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
          }

        if(element.previousSibling && element.value === "") {
            element.previousSibling.focus();
        }

          

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        otp.forEach((value) => {
            if(value === "")
            {
                alert("please enter valid otp");
            }
        })
        console.log("verified succesfully" , otp.join(""));

    }

    return (
        <>
            <Header />
            <div className="base-background-style flex flex-column">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-5 justify-center items-center">
                <img src ="\images\email.jpg" alt="emailIcon" className="w-[100px] h-[100px] ml-[140px]"></img>
                <h1 className="text-3xl mt-3 font-bold mb-4">Verify your email</h1>
                <p className="mb-4">email sent to <span>{email}</span></p>
                <form onSubmit={handleSubmit} className="otp-box">
                <div>
                {otp.map((data , index) => (

                    <input 
                type="text"
                name="otp"
                key={index}
                maxLength="1"
                value={data}
                className="otp-box w-[50px] h-[50px] text-center border rounded-md  m-[2px]"
                onChange={(e) => {handleChange(e.target , index)}}
                onFocus={(e) => e.target.select()}>

                </input>

                ))}
                </div>
                <button 
                onClick={handleSubmit}
                className="mt-4 bg-black text-white py-2 px-4 rounded-lg">
                    Verify
                </button>

                </form>
                </div>
                
            </div>
        </>
    )



}

export default Verification;