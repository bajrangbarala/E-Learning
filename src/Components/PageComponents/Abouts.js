import { Box, Container } from '@mui/material'
import React from 'react'
import About from '../About/About'

function Abouts() {
  return (
    <Box sx={{marginTop:'70px'}}>
        <Container maxWidth="xl">
            <About/>
            
        </Container>
    </Box>
  )
}

export default Abouts