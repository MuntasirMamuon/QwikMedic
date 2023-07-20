import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {


const handleAddUser=(e)=>{
  e.preventDefault()
  const form=e.target;
  const UserName=form.userName.value;
  const UserPhoneNumber=form.phoneNumber.value;
  console.log(UserName,UserPhoneNumber);

}


    return (
        <div>
             <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign UP!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleAddUser}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="Please type your name" name='userName' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="password" placeholder="Please type Phone number" name='phoneNumber' className="input input-bordered" />
          <label className="label">
         <Link to="/signIn">Already have a account? Please SignIn</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="Sign Up" className="btn btn-primary"/>
        </div>
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SignUp;