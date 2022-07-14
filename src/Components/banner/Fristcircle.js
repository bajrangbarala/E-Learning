import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    circlemain: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        '&:hover': {
            background: 'red',
            opacity: [0.9, 0.8, 0.7],
        }
    },
})

const Fristcircle = ({circleprop}) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.circlemain} >
                <img src={circleprop.image} alt="aaaa"/>
            </Box>
        </>
    )
}

export default Fristcircle