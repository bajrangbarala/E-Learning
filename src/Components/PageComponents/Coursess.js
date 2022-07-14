import { Box ,Container} from '@mui/material'
import React from 'react'
import Circle from '../banner/Circle'
import Courses from '../Courses/Courses'

function Coursess() {
  return (
    <Box sx={{margin:"75px 0"}}>
      <Container maxWidth="xl">
        <Courses/>
        <Circle/>
    </Container>
    </Box>
    
  )
}

export default Coursess