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

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Order(props) {

    const displayOrders = props.items.map((item) => (
        <div key={item.canteen} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><Typography>{item.name}</Typography></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><Typography>{item.quantity}</Typography></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><Typography>{item.price}</Typography></Item>
                </Grid>
            </Grid>
        </div>
    ))

    return (
        //displaying order
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px', backgroundColor: '#E9DCDC', borderRadius: '30px', margin: '20px', width: '1100px' }}>
                <div>
                    <Typography variant='h3' sx={{ marginBottom: '20px' }}>Order Details</Typography>
                    <Grid container spacing={2} sx={{marginBottom:'20px'}}>
                        <Grid item xs={4}>
                            <Item><Typography>Name</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><Typography>Quantity</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><Typography>Price</Typography></Item>
                        </Grid>
                    </Grid>
                    {displayOrders}
                    <Typography>Total Amount : {props.totalAmount}</Typography>
                    {props.flag?<div style={{ display: 'flex', justifyContent: 'end' }}>
                        {/* <Button variant='contained' sx={{ marginTop: '50px', marginLeft: '20px' }}>Prepared</Button> */}
                        <Button id={props.id} onClick={()=>(props.completed(props.id))} variant='contained' sx={{ marginTop: '50px', marginLeft: '20px' }}>Completed</Button>
                    </div>:<div></div>}
                    
                </div>
                <div>
                    <Typography variant='h3' sx={{ marginBottom: '20px' }}>Customer Details</Typography>
                    <Typography>Name:{props.name}</Typography>
                    <Typography>Contact Number:xxx</Typography>
                    <Typography>Email:abc@gmail.com</Typography>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Order;