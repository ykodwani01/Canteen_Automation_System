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
import { useState } from "react";

//importing custom cmp
import theme from '../general_compo/theme.js'
import useReSize from './mediaQuery';

function SignUp() {
  //custom hook for media query 
  const [background_style_ext, signIn_style_ext] = useReSize()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [type, setType] = useState("customer")
  const [name, setName] = useState('')
  const [contactNo, setContactNo] = useState('')

  const handleChange = (event) => {
    if (event.target.id === "Email") {
      setEmail(event.target.value)
    }
    else if (event.target.id === "Password") {
      setPassword(event.target.value)
    }
    else if (event.target.id === "Confirm Password") {
      setConfirmPassword(event.target.value)
    }
    else if (event.target.id === "Name"){
      setName(event.target.value)
    }
    else if (event.target.id === "ContactNo"){
      setContactNo(event.target.value)
    }
  };

  const apiUrl = 'http://localhost:8000/register';

  //submitting data to backend
  const handleButtonClick = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: `${email}`, password: `${password}`, type : `${type}`, name : `${name}`, contact_number : `${contactNo}`}),
    })
      .then(response => response.json())
      .then(data => {
        const token = data.token;
        // Store the token in local storage or a cookie for later use.
        localStorage.setItem('token', token);
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <ThemeProvider theme={theme}>
      {/* background */}
      <Container className="App" maxWidth='xl' sx={{ backgroundImage: `url(${login_photo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', ...background_style_ext }}>
        {/* sign-up box */}
        <Container className='signIn' sx={{ background: "rgba(222,216,216,0.5)", borderRadius: '30px', ...signIn_style_ext }}>
          <Typography sx={{ fontWeight: 'bolder', fontSize: '30px', marginTop: '30px' }}>Sign Up</Typography>
          <TextField id="Email" label="Email" value={email} onChange={handleChange} variant="outlined" sx={{ background: "rgba(250,249,246,0.1)", borderRadius: "5px", marginBottom: '30px', marginTop: '23px' }} />
          <TextField id="Password" label="Password" value={password} onChange={handleChange} variant="outlined" sx={{ background: "rgba(250,249,246,0.1)", borderRadius: "5px", marginBottom: '30px' }} />
          <TextField id="Confirm Password" label="Confirm Password" value={confirmPassword} onChange={handleChange} variant="outlined" sx={{ background: "rgba(250,249,246,0.1)", borderRadius: "5px", marginBottom: '30px' }} />
          <TextField id="Name" label="Name" value={name} onChange={handleChange} variant="outlined" sx={{ background: "rgba(250,249,246,0.1)", borderRadius: "5px", marginBottom: '30px' }} />
          <TextField id="ContactNo" label="ContactNo" value={contactNo} onChange={handleChange} variant="outlined" sx={{ background: "rgba(250,249,246,0.1)", borderRadius: "5px", marginBottom: '30px' }} />
          <Button variant="contained" onClick={handleButtonClick} sx={{ fontWeight: "bolder", width: '220px', height: '50px', fontSize: '20px', textTransform: 'none', marginBottom: '20px' }} disableElevation>Sign Up</Button>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <Container sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Typography>Already have an account?</Typography><Typography color='primary'> Sign in</Typography>
            </Container>
          </NavLink>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;