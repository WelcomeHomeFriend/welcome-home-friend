import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  function verfiyUser() {
    console.log("in verify user");
    fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
    .then((data) => {
      if (data.success === true) {
        console.log(data.success);
        return navigate("/");
      }
    })
  }

  //onClick={verfiyUser}

  return (
    <div className='flex items-center justify-between '>
      <h2>Login to your account</h2>

        <input type='text' title='username' placeholder='username' onChange={(e) => {
          setUsername(e.target.value)}}/>
        <input type='password' title='username' placeholder='password' onChange={(e) => {
          setPassword(e.target.value)}}/>
        <button type='submit' className='btn' onClick={verfiyUser} >
          Login
        </button>
        <a className='forgot' >
          Forgot Username?
        </a>

    </div>
  );
}
