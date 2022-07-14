import React from 'react';
import Box from '@mui/material/Box';
import { Button,  TextField, Typography } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import InputAdornment from '@mui/material/InputAdornment';
import makeStyles from '@mui/styles/makeStyles';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
  formbox: {
    width: '30%',
    margin: '70px auto',
    background: '#ede5e5',
    padding: '25px',
    borderRadius: '20px'
  },
  xstralogin: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: ' 22px 0',
  },
  
  Createaccount:{
    width:' 63%',
    margin: '12px auto !important',
    display:'block !important',
  },
  sggesnbox:{
    textAlign:'center'
  },
  Linkline:{
    underline:"none"
  },
  Forgotbox:{
    textAlign:'center',
    paddingBottom:'20px'
  }
  
});

const ForgotForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formbox} >
      <Box className={classes.Forgotbox}>
        <Typography variant='h5'>Forgot your password?</Typography>
      </Box>
      <Divider></Divider>
      <Box className={classes.xstralogin}>
      Please insert your email in the input below 
      and we will send an email with the link to 
      reset your password.
      </Box>
      <TextField
        fullWidth
        id="outlined-Email"
        label="Email"
        Type="email"
        multiline
        placeholder='@gmail.com'
        margin="normal"
        helperText="Please enter your Email"
      />
      <Button 
      type='submit' 
      variant="contained" 
      color="success"
      className={classes.Createaccount}
      >
        Reset
      </Button>
    </Box>
  );
}


export default ForgotForm
