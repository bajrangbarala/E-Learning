import React from 'react';
import Box from '@mui/material/Box';
import { Button,  TextField, Typography } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import makeStyles from '@mui/styles/makeStyles';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

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
    width: '41%',
    margin: 'auto',
    padding: ' 22px',
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
  }
  
});

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formbox} >
      <Box>
        <Typography variant='h5'>Login with</Typography>
      </Box>
      <Box className={classes.xstralogin}>
        <GitHubIcon />
        <GoogleIcon />
        <FacebookOutlinedIcon />
      </Box>
      <Box>
        <Divider><Typography>Or</Typography> </Divider>
      </Box>
      <TextField
        fullWidth
        id="outlined-Last-Name"
        label="Email"
        Type="email"
        multiline
        placeholder='@gmail.com'
        margin="normal"
        helperText="Please enter your Email"
      />
      <TextField
        id="outlined-password-input"
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="********"
        margin="normal"
      />
      <FormGroup>
        <FormControlLabel control={<Checkbox color="secondary" />} label="i agree" />
      </FormGroup>
      <Button 
      type='submit' 
      variant="contained" 
      color="success"
      className={classes.Createaccount}
      >
        LOGIN
      </Button>
      <Box className={classes.sggesnbox}>
        <Typography> Looking to <Link to="/RegiterForm" className={classes.Linkline}>create an account ?</Link></Typography>
        <Typography><Link to="/ForgotForm" className={classes.Linkline}>Forgot password ?</Link></Typography>
      </Box>
    </Box>
  );
}


export default LoginForm
