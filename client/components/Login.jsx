import React from 'react';
import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import MyModule from '../styles/MUIComponents.jsx'
import { Button, inputDiv } from '../styles/MUIComponents.jsx'



const Login = () => {
    let navigate = useNavigate();

    let handleClick = () => {
        // console.log("***** REMOVE THIS CODE IN LOGIN ******");
        // navigate('/App');
        // return;

        let username = document.getElementById('login_Username');
        let password = document.getElementById('login_Password');
        fetch('/api/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username.value, password: password.value })
        })
            .then((data) => data.json())
            .then((json) => {
                console.log(json);
                navigate('/App');
                // if (json.status === 200) {
                // }
            })
            .catch((err) => {
                console.log("Invalid UserName or password");
                username.value = '';
                password.value = '';
                console.log('error:', err);
            })
    }

    return (
        <>
            <div>Login</div>
            <>{inputDiv('Username', 'login_Username', true)}</>
            <>{inputDiv('Password', 'login_Password', true)}</>
            <Button onClick={() => { handleClick() }}>Submit</Button>
        </>);
}
//<Button label='Log In'>Login</Button>
//            <Button onClick={navigate}>Submit</Button>


export default Login;