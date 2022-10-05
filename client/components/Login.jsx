import React from 'react';

export default function Login() {
  return (
    <div className='log-form'>
      <h2>Login to your account</h2>
      <form>
        <input type='text' title='username' placeholder='username' />
        <input type='password' title='username' placeholder='password' />
        <button type='submit' className='btn'>
          Login
        </button>
        <a className='forgot' href='#'>
          Forgot Username?
        </a>
      </form>
    </div>
  );
}
