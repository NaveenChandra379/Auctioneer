import { useState } from 'react';
import '../styles/style.css'
import Header from '../components/Header';
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData.password != formData.confirmpassword)
    {
      alert("password didn't match")
      setFormData(prevState => ({
        ...prevState ,
        confirmpassword : ''

      }))
      return;
      
    }
    window.location.href ="/verification"
    console.log("submitted")
  };

  return (
    <>
    <Header /> 
    <div className="flex justify-center items-center  bg-gray-100 ml-10 mr-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md m-5">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
        <div className='flex flex-row'>
        <div className="mb-4">
          <label className="label-style ">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="First Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label-style">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Last Name"
            
          />
        </div>
        </div>

        <div className="mb-4">
          <label className="label-style">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="+91 1234567890"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label-style">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="jane@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label-style">password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="password"
            required
          />
        </div>

        <div className="mb-6">
          <label className="label-style">Confirm password</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="confirm password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-lg  transition"
        >
          Sign Up
        </button>
        <p className='mt-4'>Already have an Account</p>
        <a href='login' className='text-blue-800 underline'>login</a>
      </form>
    </div>
    </>
  );
};

export default SignUp;
