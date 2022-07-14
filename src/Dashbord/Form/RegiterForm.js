import React from 'react';
import Box from '@mui/material/Box';
import { Button, FormControl, FormLabel, Radio, RadioGroup,  TextField, Typography } from '@mui/material';
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
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
  formbox: {
    position:'relative',
    width: '30%',
    margin: '70px auto',
    background: '#ede5e5',
    padding: '25px',
    borderRadius: '20px'
  },
  namebox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px'
  },
  xstralogin: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '41%',
    margin: 'auto',
    padding: ' 22px',
  },
  passwordbox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px'

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
  closebox:{
    position: 'absolute',
    top: '10px',
    right:' 10px',
  }
  
});

const RegiterForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.formbox} >
      <Box className={classes.closebox}>
        <Link to=""><CloseIcon/></Link>
      </Box>
      <Box>
        <Typography variant='h5'>Register with</Typography>
      </Box>
      <Box className={classes.xstralogin}>
        <Link to="./"><GitHubIcon /></Link>
        <Link to="./"><GoogleIcon /> </Link>
        <Link to="./"><FacebookOutlinedIcon/></Link>
      </Box>
      <Box>
        <Divider><Typography>Or</Typography> </Divider>
      </Box>
      <Box className={classes.namebox}>
        <TextField
          fullWidth
          id="outlined-Frist-Name"
          label="Frist Name"
          autoComplete
          // variant="standard"
          // helperText="Incorrect entry."
          placeholder="Frist Name"
          margin="normal"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <AccountCircle />
        //     </InputAdornment>
        //   ),
        // }}
        />
        <TextField
          fullWidth
          id="outlined-Last-Name"
          label="Last Name"
          placeholder="Last Name"
          margin="normal"
        // variant="filled"
        // InputLabelProps={{
        //   shrink: true,
        // }}

        />
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
      <Box className={classes.passwordbox}>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="********"
        margin="normal"
      />
      <TextField
      id="outlined-password-input"
      label="Repeat Password"
      type="password"
      autoComplete="current-password"
      placeholder="********"
      margin="normal"
    />
      </Box>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormGroup>
        <FormControlLabel control={<Checkbox color="secondary" />} label="i agree" />
      </FormGroup>
      <Button 
      type='submit' 
      variant="contained" 
      color="success"
      className={classes.Createaccount}
      >
        CREATE ACCOUNT
      </Button>
      <Box className={classes.sggesnbox}>
        <Typography> Already have an account? <Link className={classes.Linkline} to="/LoginForm">Login</Link></Typography>
      </Box>
    </Box>
  );
}


export default RegiterForm
