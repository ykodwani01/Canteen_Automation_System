//importing css
import '../App.css';

//importing MUI cmp
import { Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material/'

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

function PastOrder(props) {

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

    const handleChange = (event) => {
        const feedback = event.target.value;
        console.log(event)
        props.changeFeedBack(props.id, feedback);
    }

    return (
        //displaying order
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '40px', backgroundColor: '#E9DCDC', borderRadius: '30px', margin: '20px', width: '1100px' }}>
                <div>
                    <Typography variant='h3' sx={{ marginBottom: '20px' }}>Order Details</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }}>{props.name}</Typography>
                    {displayOrders}
                </div>
                <div>
                    <div>
                    <TextField
                        id={props.id}
                        label="Feedback"
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{width:'165%'}}
                        value={props.feedback.filter((item)=>(item.order_id===props.id))[0].feedback}
                        onChange={handleChange}
                    />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button id={props.id} variant='contained' onClick={()=>(props.onButtonClick(props.id))} sx={{ marginTop: '50px', marginLeft: '20px' }}>Submit</Button>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}

export default PastOrder;