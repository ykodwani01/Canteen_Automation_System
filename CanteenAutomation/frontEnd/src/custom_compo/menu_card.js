//importing css
import '../App.css';

//importing MUI cmp
import { Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';

//importing react cmp
import { useState } from 'react';

//defining theme
const theme = createTheme({
  palette:{
    primary:{main:"#C31E2C"},
    secondary:green
  }
})

function MenuCard(props){ 
    const [color,setColor] = useState(false)
    return(
      //displaying menu item
        <ThemeProvider theme={theme}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',backgroundColor:color?'#E8CFCF':'#E9DCDC',borderRadius:'30px',margin:'10px'}} onMouseEnter={()=>(setColor(true))} onMouseLeave={()=>(setColor(false))}>
                <Typography variant='h6' sx={{width:'600px',marginLeft:'20px'}}>{props.name}</Typography>
                <Typography variant='h6' sx={{fontWeight:'bold',width:'250px'}}>{props.price}</Typography>
                <Button id={props.id} variant='contained' sx={{margin:'0px 20px',borderRadius:'40px',height:'30px'}} onClick={(event)=>(props.subItem(event))}><Typography variant='h5'>-</Typography></Button>
                <div style={{backgroundColor:'#EBE7E6',width:'50px',borderRadius:'30px',height:'30px',border:'white solid 2px',display:'flex',justifyContent:'center',alignItems:'center'}}><Typography>{(props.items.order.filter((item)=>(parseInt(item.item_id)===parseInt(props.id)))[0].quantity)}</Typography></div>
                <Button id={props.id} variant='contained' sx={{margin:'0px 20px',borderRadius:'40px',height:'30px'}} onClick={(event)=>(props.addItem(event))}><Typography variant='h5'>+</Typography></Button>
            </div>
        </ThemeProvider>
    )
}

export default MenuCard;