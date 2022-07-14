import { Box, Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    btn_2: {
        background: '#FE7558 !important',
        color: '#FFFFFF !important',
        padding: '12px 31px !important',
        fontsize: '20px !important',
        fontweight: '400',
        textTransform: 'capitalize !important',
        borderRadius: '15px !important',
    },
})
function Sabout() {
    const classes = useStyles();
    return (
        <>
            <Box style={{padding: '0 33px 0 90px'}}>
                <h3 style={{color:'#FE7558',margin:'0'}}>ABOUT US</h3>
                <h2 style={{fontSize:'40px',fontWeight: '400',margin:'10px 0px'}}>Welcome to online
                    Class LearnEngine</h2>
                <p style={{fontSize:'18px',fontWeight: '400',margin:'0px 0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus arcu vitae enim mi sit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus arcu vitae enim mi sit.</p>
                <p style={{display:'flex'}}><span style={{marginRight:'10px'}}><img src="./img/Group 199.png" alt='fff' /></span>Nisl nisi massa amet consequat.</p>
                <p style={{display:'flex'}}><span style={{marginRight:'10px'}}><img src="./img/Group 199.png" alt='ddd' /></span>Nisl nisi massa amet consequat.</p>
                <Button className={classes.btn_2}>Learn more...</Button>
            </Box>
        </>
    )
}

export default Sabout