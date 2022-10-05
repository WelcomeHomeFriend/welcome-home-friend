import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate();
    return (
        <>
            <div>SignUp</div>
            <Button onClick={() => { navigate('/app') }}>Register</Button>
        </>
    );
}


export default SignUp;