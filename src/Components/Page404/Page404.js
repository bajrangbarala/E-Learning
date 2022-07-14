import { Box } from '@mui/material'
import {Link} from 'react-router-dom' 
import React from 'react'

function Page404() {
  return (
    <Box sx={{marginTop:'70px'}}>
        <img
        src="./img/Page404.png"
        alt="aa"
        loading="lazy"
        not found the connot
      />
      <Link to="/">go to home page </Link>
      
    </Box>
  )
}

export default Page404