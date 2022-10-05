import React from 'react';
///user/signup
///user/login

export default function Register() {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  //{ success: true , message: 'Account created'}

  function createAUser() {
    fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
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
      <h2 className='registration'>Register</h2>
      <form>
        <input
          type='text'
          title='name'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          title='username'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          title='username'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className='btn' onClick={createAUser}>
          Login
        </button>
      </form>
    </div>
  );
}
