//importing css
import '../App.css';

//importing MUI cmp
import { Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

//importing reac cmp
//import { NavLink } from 'react-router-dom';
import { useState } from 'react';

//importing images
//import home_background from './home_background.jpg'
import canteen_img from "./canteen_img.jpg";

//defining theme
const theme = createTheme({
    palette: {
        primary: { main: "#C31E2C" },
        secondary: green
    }
})

function Card(props) {
    const [color,setColor] = useState(false)
    return (
        //Card design
        <ThemeProvider theme={theme}>
            <div id={props.id} style={{ display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',padding:'20px',borderRadius:'30px',backgroundColor:color?'#E8CFCF':'#E9DCDC',margin:'20px'}} onClick={props.onHover} onMouseEnter={()=>(setColor(true))} onMouseLeave={()=>(setColor(false))}>
                <Typography variant='h6' id={props.id}> {props.name} </Typography>
                <img id={props.id} src={canteen_img} alt='cafe' style={{height:'200px',margin:'20px 0px',borderRadius:'20px'}}/>
                <Button id={props.id} variant='contained' endIcon={<EastIcon/>} sx={{borderRadius:'30px'}} onClick={(event)=>(props.canteenClicked(event))}>Order</Button>
            </div>
        </ThemeProvider>
    );
}

export default Card;