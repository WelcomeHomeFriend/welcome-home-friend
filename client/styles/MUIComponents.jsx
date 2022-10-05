import React from 'react';
import { usePetContext, usePetUpdateContext } from '../contexts/PostContext.jsx';
import TextField from '@mui/material/TextField';
import StyledButton from '@mui/material/Button';

export const inputDiv = (label, key, requiredBool) => {
    return (
        <div className="create-post-text-field">
            <TextField
                id={key}
                label={label}
                variant="outlined"
                size="small"
                sx={{
                    width: '100%',
                    '& label': {
                        fontSize: '0.8rem',
                    },
                    '& label.Mui-focused': {
                        color: '#333',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#333',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#333',
                        },
                        '& input': {
                            fontSize: '0.8rem',
                        },
                        '&:hover fieldset': {
                            borderColor: 'orange',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#333',
                        },
                    },
                }}
                required={requiredBool}
            />
        </div>
    )
};

export const textAreaDiv = (label, key) => {
    return (
        <div className="create-post-text-field">
            <TextField
                id={key}
                label={label}
                variant="outlined"
                size="small"
                multiline rows={2}
                sx={{
                    width: '100%',
                    '& label': {
                        fontSize: '0.8rem',
                    },
                    '& label.Mui-focused': {
                        color: '#333',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#333',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#333',
                        },
                        '& textarea': {
                            fontSize: '0.8rem',
                        },
                        '&:hover fieldset': {
                            borderColor: 'orange',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#333',
                        },
                    },
                }}
            />
        </div>
    )
};

export const Button = (props) => {
    console.log(props);
    return (
        <StyledButton
            size="large"
            variant="contained"
            onClick={props.onClick}
            sx={{
                backgroundColor: '#EED971FF',
                color: 'black',
                '&:hover': {
                    backgroundColor: 'orange',
                    color: '#222'
                },
            }} >
            {props.children}
        </StyledButton>
    );
}
// const styles = () => ({ ... });
// const BrandButton = ({ classes, color, children }) => {

//     return (

//         <StyledButton classes={classes} variant="contained" color={color}>
//             {children}
//         </StyledButton>

//     );

// };
// export default withStyles(styles)(BrandButton);

// return (
//     <StyledButton
//         size="large"
//         variant="contained"
//         label={props.label}
//         sx={{
//             backgroundColor: '#EED971FF',
//             color: 'black',
//             '&:hover': {
//                 backgroundColor: 'orange',
//                 color: '#222'
//             },
//         }} />
// );
// let obj = { Button, inputDiv, textAreaDiv }
// export default obj;