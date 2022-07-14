import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    logo: {
        color: "#26C32D !important",
        fontSize: '18px',
        fontWeight: '700',
        textDecoration: 'none',
        fontFamily: 'Roboto',
    },
});

function Logo() {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Typography className={classes.logo}
                    variant="h6"
                    component="a"
                    href="/"
                >
                    Learn<span style={{
                        color: "#FE7558",
                    }} >Engine
                    </span>
                </Typography>
            </Box>

        </>
    )
}

export default Logo