//importing css
import '../App.css';

//importing MUI cmp
import { Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';

//importing react cmp
//import { useState } from 'react';

//importing custom cmp
import theme from "../general_compo/theme.js";

function Order(props){ 
    const all_food = props.order.food.map((item)=>(
        <Typography>{item[0]}x{item[1]}</Typography>
    ))
    return(
      //displaying order
        <ThemeProvider theme={theme}>
            <div style={{display:'flex',justifyContent:'space-around',padding:'30px',backgroundColor:'#E9DCDC',borderRadius:'30px',margin:'20px',width:'1100px',height:'400px'}}>
                <div>
                    <Typography variant='h3' sx={{marginBottom:'20px'}}>Order Details</Typography>
                    {all_food}
                    <div style={{display:'flex',justifyContent:'end'}}>
                        <Button variant='contained'sx={{marginTop:'50px',marginLeft:'20px'}}>Prepared</Button>
                        <Button variant='contained'sx={{marginTop:'50px',marginLeft:'20px'}}>Completed</Button>
                    </div>
                </div>
                <div>
                    <Typography variant='h3' sx={{marginBottom:'20px'}}>Customer Details</Typography>
                    <Typography>Name:{props.order.name}</Typography>
                    <Typography>Contact Number:{props.order.contactNo}</Typography>
                    <Typography>Email:{props.order.email}</Typography>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Order;