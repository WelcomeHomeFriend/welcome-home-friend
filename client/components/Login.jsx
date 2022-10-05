import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div>Login</div>
            <Button onClick={() => { navigate('/App') }}>Submit</Button>
        </div>);
}


export default Login;