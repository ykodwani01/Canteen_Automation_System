import './App.css';
import { Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
//import { NavLink } from 'react-router-dom';
//import home_background from './home_background.jpg'
import EastIcon from '@mui/icons-material/East';
import canteen_img from "./canteen_img.jpg";
import { useState } from 'react';
//import { Navigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: { main: "#C31E2C" },
        secondary: green
    }
})

function Card(props) {
    const [color,setColor] = useState(false)
    return (
        <ThemeProvider theme={theme}>
            <div id={props.id} style={{ display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',padding:'20px',borderRadius:'30px',backgroundColor:color?'#E8CFCF':'#E9DCDC',margin:'20px'}} onClick={props.onHover} onMouseEnter={()=>(setColor(true))} onMouseLeave={()=>(setColor(false))}>
                <Typography variant='h6' id={props.id}> {props.name} </Typography>
                <img id={props.id} src={canteen_img} alt='cafe' style={{height:'200px',margin:'20px 0px',borderRadius:'20px'}}/>
                <Button id={props.id} variant='contained' endIcon={<EastIcon/>} sx={{borderRadius:'30px'}}>Order</Button>
            </div>
        </ThemeProvider>
    );
}

export default Card;