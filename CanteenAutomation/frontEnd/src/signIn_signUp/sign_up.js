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

//importing custom cmp
import theme from '../general_compo/theme.js'
import useReSize from './mediaQuery';

function SignUp() {
  //custom hook for media query 
  const [background_style_ext,signIn_style_ext] = useReSize()
  return (
    <ThemeProvider theme={theme}>
      {/* background */}
      <Container className="App" maxWidth='xl' sx={{backgroundImage:`url(${login_photo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',...background_style_ext}}>
        {/* sign-up box */}
        <Container className='signIn' sx={{background:"rgba(222,216,216,0.5)",borderRadius:'30px',...signIn_style_ext}}> 
          <Typography sx={{fontWeight:'bolder',fontSize:'30px',marginTop:'30px'}}>Sign Up</Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px',marginTop:'23px'}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" sx={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px'}}/>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" sx={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px'}}/>
          <Button variant="contained" sx={{fontWeight:"bolder",width:'220px',height:'50px',fontSize:'20px',textTransform:'none',marginBottom:'20px'}} disableElevation>Sign Up</Button>
          <NavLink to='/' style={{textDecoration:'none',color:'black'}}>
            <Container sx={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
              <Typography>Already have an account?</Typography><Typography color='primary'> Sign in</Typography>
            </Container>
          </NavLink>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;