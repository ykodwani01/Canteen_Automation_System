import login_photo from './login_photo.png'
import './App.css';
import { TextField, Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const theme = createTheme({
  palette:{
    primary:{main:"#C31E2C"},
    secondary:green
  }
})

function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundImage:`url(${login_photo})`,height:"100vh",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',display:'flex',justifyContent:'left'}}>
        <div className='signIn' style={{width:"334px",height:"498px",background:"rgba(222,216,216,0.5)",borderRadius:'30px',marginTop:'137px',marginLeft:'130px'}}> 
          <Typography style={{fontWeight:'bolder',fontSize:'30px',marginTop:'40px'}}>Sign In</Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px',marginTop:'35px'}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'10px'}}/>
          <Typography style={{marginLeft:'-80px'}}>Forgot Password?</Typography>
          <Button variant="contained" sx={{fontWeight:"bolder",width:'220px',height:'50px',fontSize:'20px',textTransform:'none',marginBottom:'30px',marginTop:'50px'}} disableElevation>Login</Button>
          <NavLink to='/sign_up' style={{textDecoration:'none',color:'black'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
              <Typography>Don't have an account?</Typography><Typography color='primary' >Sign up</Typography>
            </div>
          </NavLink>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SignIn;