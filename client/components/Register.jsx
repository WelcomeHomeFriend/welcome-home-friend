import React from 'react';
///user/signup
///user/login

export default function Register() {
  const [userDetails, setUserDetails] = React.useState({
    name: '',
    username: '',
    password: '',
  });

  //{ success: true , message: 'Account created'}

  function createAUser() {
    console.log(userDetails);
    fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: userDetails.name,
        username: userDetails.username,
        password: userDetails.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      if (data.status === 200) {
        console.log(data);
      }
    });
  }
  return (
    <div>
      <h2 class='registration'>Register</h2>
      <form>
        <input
          type='text'
          title='name'
          placeholder='name'
          onChange={(e) => setUserDetails({ name: e.target.value })}
        />
        <input
          type='text'
          title='username'
          placeholder='username'
          onChange={(e) => setUserDetails({ username: e.target.value })}
        />
        <input
          type='password'
          title='username'
          placeholder='password'
          onChange={(e) => setUserDetails({ password: e.target.value })}
        />

        <button type='submit' className='btn' onClick={createAUser}>
          Login
        </button>
      </form>
    </div>
  );
}
