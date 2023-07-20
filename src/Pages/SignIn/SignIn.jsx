import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate=useNavigate()
  const [data,setData]=useState([])
  const [user,setUser]=useState([])
  useEffect(()=>{
    const apiUrl = 'https://qwikmedic.pythonanywhere.com/userProfile';
  
    fetch(apiUrl, {
      headers: {
        Authorization: 'Token 84db931d9424722dba3f46921df2471c60e13eca',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data)
    
      
    
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        });
  },[])

  // console.log(data);
 
 
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.phoneNumber.value;
    const PinNumber = form.PinNumber.value;

    // Find the user that matches the phoneNumber and PinNumber
    const foundUser = data.find(
      (dt) => dt.phonenumber === phoneNumber && dt.password === PinNumber
    );

    if (foundUser) {
      const{phonenumber,password}=foundUser
      localStorage.setItem('phoneNumber',phonenumber)
      localStorage.setItem('PinNumber',password)
      toast.success('Successfully Sign In!')
      navigate('/')
    
      // User found, you can do something with the user data here
      // console.log("User found:", foundUser);
      // setUser(foundUser); // Set the found user to the state if needed
    } else {
      toast.error('Incorrect username or pin')
      console.log("User not found or credentials incorrect");
      // Handle the case where the user is not found or the credentials are incorrect
    }
  };



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Please type phone number" name='phoneNumber' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PIN</span>
          </label>
          <input type="text" placeholder="PIN" name='PinNumber' className="input input-bordered" />
          <label className="label">
           <Link to={'/signUp'}>Are You New? Please Sign Up</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value={"Sign In"} className="btn btn-primary"/>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;