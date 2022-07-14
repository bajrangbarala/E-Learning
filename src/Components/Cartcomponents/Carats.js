import { Box } from '@mui/system'
import React from 'react'
import Cart from './Cart'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
// import { Grid } from '@mui/material';


const useStyles = makeStyles({
    btn_2: {
        background: '#FE7558 !important',
        color: '#FFFFFF !important',
        padding: '12px 31px !important',
        fontsize: '20px !important',
        fontweight: '400',
        textTransform: 'capitalize !important',
        borderRadius: '15px !important',
        textAlign: 'center'
    },
    cardheading: {
        color: '#FE7558'
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    mainbtn: {
        textAlign: 'center',
        padding: '82px 0px'
    },
    maincard: {
        margin: ' 79px 0 '
    }
});
const cardArray = [
    {
        name: 'Sajid Ali',
        sub: 'UI/UX Designer',
        image: './img/aa.png'
    },
    {
        name: 'Sajid Ali',
        sub: 'Web Designer Designer',
        image: './img/ab.png'
    },
    {
        name: 'Pandy Deem',
        sub: 'Web Developer',
        image: './img/ac.png'
    },
    {
        name: 'Alex Hess',
        sub: 'App Developer',
        image: './img/ad.png'
    },

]

const Carats = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.maincard}>
                <h3 className={classes.cardheading}>INSTRUCTOR</h3>
                <Box className={classes.card}>
                    {
                        cardArray.map((item, index) => (
                            <Cart cardset={item} />
                        ))
                    }
                </Box>
                <Box className={classes.mainbtn}>
                    <Button className={classes.btn_2}>See more...</Button>
                </Box>
            </Box>
        </>
    )
}

export default Carats