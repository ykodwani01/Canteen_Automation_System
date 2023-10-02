//importing css
import '../App.css';

//importing MUI cmp
import { Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';

//importing react cmp
import { useState } from 'react';

//importing custom cmp
import theme from "../general_compo/theme.js";

function OwnMenuCard(props){ 
    const [color,setColor] = useState(false)
    return(
      //displaying menu item
        <ThemeProvider theme={theme}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',backgroundColor:color?'#E8CFCF':'#E9DCDC',borderRadius:'30px',margin:'10px'}} onMouseEnter={()=>(setColor(true))} onMouseLeave={()=>(setColor(false))}>
                <Typography variant='h6' sx={{width:'550px',marginLeft:'20px'}}>{props.menu[0]}</Typography>
                <Typography variant='h6' sx={{fontWeight:'bold',width:'250px'}}>{props.menu[1]}</Typography>
                <Button variant='contained' sx={{margin:'0px 20px',borderRadius:'30px',height:'30px'}}>Edit Item</Button>
                <Button variant='contained' sx={{margin:'0px 20px',borderRadius:'30px',height:'30px'}}>Remove Item</Button>
            </div>
        </ThemeProvider>
    )
}

export default OwnMenuCard;