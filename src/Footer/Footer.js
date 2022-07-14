import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Header/Navbar';

const Footer = () =>{
    const navigate = useNavigate();
    return(
        <>
        <Box clas>
        <Navbar/>
            {/* <Button onClick={() => navigate('./Navbar')} ></Button> */}
        </Box>
            <h1 style={{textAlign:'center'}}>my E-Learning-Website-design footer</h1>
        </>
    )

}

export default Footer
