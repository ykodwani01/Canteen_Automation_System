import './App.css';
import { Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
//import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import home_image from './home_compo/home_image.png';
import EastIcon from '@mui/icons-material/East';
import del_man from "./home_compo/del_man.png";
import home_3_1 from "./home_compo/1_3_1.png";
import home_3_2 from "./home_compo/1_3_2.png";
import home_3_3 from "./home_compo/1_3_3.png";
import cafe from "./cafe.png";
//import { useState } from 'react';
import Specialities from './home_compo/specialities';
//import { Navigate } from 'react-router-dom';

const theme = createTheme({
  palette:{
    primary:{main:"#C31E2C"},
    secondary:green
  }
})

function HomePage(){

    return(
        <ThemeProvider theme={theme}>
            <div style={{backgroundColor:'#DED8D8',display:'flex',alignItems:'center',flexDirection:'column'}}>
                <div style={{borderRadius:'108px',marginTop:'70px' ,backgroundColor:'#EBE7E6',border:'2px solid white',width:'1341px',height:'732px',boxShadow:'0px 10px 5px darkgrey',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'1191px',height:'632px'}}>
                        <div style={{display:'flex',height:'70px',justifyContent:'center',marginTop:'20px'}}>
                            <img src={logo} alt='website logo' style={{marginRight:'250px',height:'80px'}}/>
                            <div style={{display:'flex',boxShadow:'0px 2px 0px darkGrey',paddingBottom:'10px',marginTop:'10px'}}>
                                <Button style={{color:'black',marginRight:'20px',marginTop:'10px',fontWeight:'bold'}} href='/home'>Home</Button>
                                <Button style={{color:'black',marginRight:'20px',marginTop:'10px',fontWeight:'bold'}} href='/home/feedback'>Feedback</Button>
                                <Button style={{color:'black',marginRight:'20px',marginTop:'10px',fontWeight:'bold'}} href='/home/aboutus'>About Us</Button>
                                <Button style={{color:'black',marginRight:'60px',marginTop:'10px',fontWeight:'bold'}} href='/home/contact'>Contact</Button>
                                <Button variant='contained' style={{borderRadius:'30px',marginRight:'20px',marginTop:'10px',fontWeight:'bold'}} href='/home/account'>Account</Button>
                                <Button variant='contained' startIcon={<ShoppingCartIcon/>} style={{borderRadius:'50px',marginRight:'20px',marginTop:'10px',fontWeight:'bold'}} href='/home/cart'>0</Button>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'100px',marginLeft:'100px'}}>
                            <div style={{width:'450px'}}>
                                <Typography variant='h3'>Order food online from your room lazy? No worries!</Typography>
                                <Typography color='primary' style={{marginTop:'20px'}}>Freshly made food delivered to your door.</Typography>
                                <Button variant='contained' style={{borderRadius:'30px',marginTop:'40px',height:'50px'}}>Order now</Button>
                            </div>
                            <div style={{marginLeft:'70px'}}>
                                <img src={home_image} alt='home_image' style={{height:'400px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:'108px',marginTop:'70px' ,backgroundColor:'#EBE7E6',border:'2px solid white',width:'1341px',height:'582px',boxShadow:'0px 10px 5px darkgrey',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'1191px',height:'532px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div>
                            <Typography variant='h3' style={{marginBottom:'30px'}}>Explore your favourite cafe's food.</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</Typography>
                            <Button variant="contained" endIcon={<EastIcon/>} style={{borderRadius:'30px',marginTop:'50px',height:'50px'}}>Explore</Button>
                        </div>
                        <div>
                            <img src={del_man} alt='Delivery man' style={{height:'500px'}}/>
                        </div>
                    </div>
                </div>
                <div style={{borderRadius:'108px',marginTop:'70px' ,backgroundColor:'#EBE7E6',border:'2px solid white',width:'1341px',height:'582px',boxShadow:'0px 10px 5px darkgrey',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'1191px',height:'532px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Specialities key="one" id="one" image={home_3_3} title="Wide selection of FOOD!" description="Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique." />
                        <Specialities key="two" id="two" image={home_3_2} title="Easy order placing!" description="Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique." />
                        <Specialities key="three" id="three" image={home_3_1} title="Fast preparation within 20 mins" description="Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique." />
                    </div>
                </div>
                <footer style={{display:'flex',justifyContent:'center',backgroundColor:'#C31E2C',width:'100%',marginTop:'70px',paddingTop:'10px'}}>
                    <div style={{width:'500px',padding:'50px'}}>
                        <img src={cafe} alt='cafe' style={{width:'200px'}}/>
                        <Typography style={{color:'#DAC6C7'}}>At Quick Cafe our core beliefs drive everything we do. We believe in the power of innovation to revolutionize the way people experience food and dining. We're passionate about harnessing technology to make dining experiences more convenient, efficient, and enjoyable for everyone.</Typography>
                    </div>
                    <div style={{padding:'50px'}}>
                        <Typography style={{color:'white',fontWeight:'bold',marginBottom:'50px'}}>Quick links</Typography> 
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Browse Foodtime</Typography>
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Registrations</Typography>
                    </div>
                    <div style={{padding:'50px'}}>
                        <Typography style={{color:'white',fontWeight:'bold',marginBottom:'50px'}}>About</Typography> 
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>About us</Typography>
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Mission</Typography>
                    </div>
                    <div style={{padding:'50px'}}>
                        <Typography style={{color:'white',fontWeight:'bold',marginBottom:'50px'}}>Contact</Typography>
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Facebook</Typography> 
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Twitter</Typography>
                        <Typography style={{color:'#DAC6C7',marginBottom:'20px'}}>Instagram</Typography>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;