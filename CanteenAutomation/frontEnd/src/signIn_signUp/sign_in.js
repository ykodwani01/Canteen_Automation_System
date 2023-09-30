//importing css
import '../App.css';

//importing MUI cmp
import { TextField, Typography, Container } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';

//importing photos
import login_photo from './login_photo.png'

//importing react cmp
import { NavLink } from 'react-router-dom';
//import { useEffect, useState } from 'react';

//importing custom cmp
import theme from '../general_compo/theme.js'
import useReSize from './mediaQuery';


function SignIn() {
  //custom hook for media query
  const [background_style_ext,signIn_style_ext] = useReSize()
  return (
    <ThemeProvider theme={theme}>
      {/* background */}
      <Container className="App" maxWidth='xl' sx={{backgroundImage:`url(${login_photo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',...background_style_ext}}>
        {/* sign-in box */}
        <Container className='signIn' sx={{background:"rgba(222,216,216,0.5)",borderRadius:'30px',...signIn_style_ext}}> 
          <Typography sx={{fontWeight:'bolder',fontSize:'30px',marginTop:'30px'}}>Sign In</Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px',marginTop:'35px'}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'10px'}}/>
          <Typography sx={{marginLeft:'-80px'}}>Forgot Password?</Typography>
          <Button variant="contained" sx={{fontWeight:"bolder",width:'220px',height:'50px',fontSize:'20px',textTransform:'none',marginBottom:'30px',marginTop:'50px'}} disableElevation>Login</Button>
          <NavLink to='/sign_up' style={{textDecoration:'none',color:'black'}}>
            <Container sx={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>
              <Typography>Don't have an account?</Typography><Typography color='primary' >Sign up</Typography>
            </Container>
          </NavLink>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;