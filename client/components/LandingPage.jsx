import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    let navigate = useNavigate();
    return (
        <>
            <div>LandingPage</div>
            <Button onClick={() => { navigate('/login') }}>Login</Button>
            <Button onClick={() => { navigate('/signup') }}>Sign Up</Button>
        </>
    );
}


export default LandingPage;