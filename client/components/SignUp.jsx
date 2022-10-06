import React, { useTransition } from 'react';
import TextField from '@mui/material/TextField';
import { Button, inputDiv } from '../styles/MUIComponents.jsx'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        let username = document.querySelector('#signup_Username');
        let password = document.querySelector('#signup_Password');
        const body = { username: username.value, password: password.value };
        console.log(body);
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                navigate('/app');
            })
            .catch(err => {
                console.log("Invalid UserName or password");
                username.value = '';
                password.value = '';
                console.log(err)
            });

    }
    return (
        <>
            <div>SignUp</div>
            <>{inputDiv('Username', 'signup_Username', true)}</>
            <>{inputDiv('Password', 'signup_Password', true)}</>
            <Button onClick={handleClick}>Submit</Button>
        </>
    );
}


export default SignUp;