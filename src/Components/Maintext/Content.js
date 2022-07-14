import { Box } from '@mui/material'
import React from 'react'
import Left from './Left'
import Right from './Right'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    mainsec: {
        display: 'flex',
        marginTop: '65px'

    },
    main: {
        paddingtop: '65px'
    }
})

function Content() {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.mainsec}>
                <Left />
                <Right />
            </Box>
        </>
    )
}

export default Content