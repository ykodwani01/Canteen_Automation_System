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

    const displayOrders = props.items.map((item)=>(
        <div key={item.canteen} style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
            <Typography>{item.name}</Typography>
            <Typography>{item.quantity}</Typography>
            <Typography>{item.price}</Typography>
        </div>
    ))

    return(
      //displaying order
        <ThemeProvider theme={theme}>
            <div style={{display:'flex',justifyContent:'space-around',padding:'30px',backgroundColor:'#E9DCDC',borderRadius:'30px',margin:'20px',width:'1100px',height:'400px'}}>
                <div>
                    <Typography variant='h3' sx={{marginBottom:'20px'}}>Order Details</Typography>
                    {displayOrders}
                    <Typography>Total Amount : {props.totalAmount}</Typography>
                    <div style={{display:'flex',justifyContent:'end'}}>
                        <Button variant='contained'sx={{marginTop:'50px',marginLeft:'20px'}}>Prepared</Button>
                        <Button variant='contained'sx={{marginTop:'50px',marginLeft:'20px'}}>Completed</Button>
                    </div>
                </div>
                <div>
                    <Typography variant='h3' sx={{marginBottom:'20px'}}>Customer Details</Typography>
                    <Typography>Name:{props.name}</Typography>
                    <Typography>Contact Number:xxx</Typography>
                    <Typography>Email:abc@gmail.com</Typography>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Order;