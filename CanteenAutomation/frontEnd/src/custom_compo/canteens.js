//importing css
import '../App.css';

//importing MUI cmp
import { Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//importing router
//import { NavLink } from 'react-router-dom';

//importing images
import logo from '../general_compo/logo.png'
import cafe from "../general_compo/cafe.png";

//importing custom components
import Card from '../canteens_compo/card.js'; 

//importing json data
import cafe_data from '../data_files/data.json';

//defining theme
const theme = createTheme({
    palette: {
        primary: { main: "#C31E2C" },
        secondary: green
    }
})

function Canteens() {

    //retriving data from json file 
    //code optimization is left (i.e. using Grid)
    const cafe_data_all = cafe_data.data.map((item)=>(<Card name={item.name} key={item.id} id={item.id}/>))
    const cafe_data_1 = cafe_data_all.slice(0,3)
    const cafe_data_2 = cafe_data_all.slice(3,6)


    return (
        <ThemeProvider theme={theme}>
            {/* background */}
            <div style={{ backgroundColor: '#DED8D8', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* first box */}
                <div style={{ borderRadius: '108px', marginTop: '70px', backgroundColor: '#EBE7E6', border: '2px solid white', width: '1341px', height: '1132px', boxShadow: '0px 10px 5px darkgrey', display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent:'center'}}>
                    {/* padding box */}
                    <div style={{ width: '1191px', height: '10`32px'}}>
                        {/* header div / Navigation bar */}
                        <div style={{ display: 'flex', height: '70px', justifyContent: 'center', marginTop: '20px' }}>
                            <img src={logo} alt='website logo' style={{ marginRight: '250px', height: '80px' }} />
                            <div style={{ display: 'flex', boxShadow: '0px 2px 0px darkGrey', paddingBottom: '10px', marginTop: '10px' }}>
                                <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home'>Home</Button>
                                <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/feedback'>Feedback</Button>
                                <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/aboutus'>About Us</Button>
                                <Button style={{ color: 'black', marginRight: '60px', marginTop: '10px', fontWeight: 'bold' }} href='/home/contact'>Contact</Button>
                                <Button variant='contained' style={{ borderRadius: '30px', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/account'>Account</Button>
                                <Button variant='contained' startIcon={<ShoppingCartIcon />} style={{ borderRadius: '50px', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/cart'>0</Button>
                            </div>
                        </div>
                        {/* displaying canteens */}
                        <div style={{ marginTop: '100px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'40px'}}>
                                {cafe_data_1}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {cafe_data_2}
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#C31E2C', width: '100%', marginTop: '70px', paddingTop: '10px' }}>
                    <div style={{ width: '500px', padding: '50px' }}>
                        <img src={cafe} alt='cafe' style={{ width: '200px' }} />
                        <Typography style={{ color: '#DAC6C7' }}>At Quick Cafe our core beliefs drive everything we do. We believe in the power of innovation to revolutionize the way people experience food and dining. We're passionate about harnessing technology to make dining experiences more convenient, efficient, and enjoyable for everyone.</Typography>
                    </div>
                    <div style={{ padding: '50px' }}>
                        <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>Quick links</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Browse Foodtime</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Registrations</Typography>
                    </div>
                    <div style={{ padding: '50px' }}>
                        <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>About</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>About us</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Mission</Typography>
                    </div>
                    <div style={{ padding: '50px' }}>
                        <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>Contact</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Facebook</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Twitter</Typography>
                        <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Instagram</Typography>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default Canteens;