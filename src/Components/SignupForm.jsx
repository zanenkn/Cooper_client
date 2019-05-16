import React from 'react';

const SignupForm = () => {
  return (
    <form id="signup-form">
      <div>
        <label >Email</label>
        <input id="email"></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password"></input>
      </div>

      <div>
        <label>Password confirmation</label>
        <input id="password-confirmation"></input>
      </div>


      <button id="submit">Submit</button>
    </form>
  )
}

export default SignupForm;