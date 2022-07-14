import { Box, Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  btn_2:{
    background:'#FE7558 !important',
    color:'#FFFFFF !important',
    padding: '12px 31px !important',
    fontsize: '20px !important',
    fontweight: '400',
    textTransform: 'capitalize !important',
    borderRadius: '15px !important',
  },
  btn1:{
    
    color:'black !important',
    border:'solid 1px black !important',
    marginLeft:'25px !important',
    padding: '13px 27px !important',
    textTransform: 'capitalize !important',
    borderRadius: '15px !important'
  },
  pra1:{
    color:'#41CB47',
    paddingTop:' 86px'
  },
  pra2:{
    fontSize:'18px',
    fontWeight:'400'
  },
  handig1:{
    fontSize:'67px' ,
    margin:'2px',
    paddingRight: '75px'
  },
  bannerbox:{
    width: '100%', 
    display: 'flex'
  }

});
function Left() {
  const classes = useStyles();
  return (
    <>
      <Box style={{width:'50%'}}>
        <Box>
          <p className={classes.pra1}>Best way to learn from anywhere</p>
          <h2 className={classes.handig1}>Learn on your schedule from any device</h2>
          <p className={classes.pra2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium sapien,
            ipsum eu et habitant arcu dignissim egestas ipsum. Sit nunc euismod dui,
            posuere mattis urna. Quis risus proin quam porttitor diam erat pellentesque.
          </p>
        </Box>
        <Box className={classes.bannerbox}>
          <Button className={classes.btn_2}>Start Learning</Button>
          <Button className={classes.btn1} href="#outlined-buttons">
            Descover
          </Button>
        </Box>
      </Box>

    </>
  )
}

export default Left