//importing css
import '../App.css';

//importing MUI cmp
import { Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material/'

//importing custom cmp
import theme from "../general_compo/theme.js";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FAF9F6',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

function PastOrder(props) {
    const tmp = props.items.filter((item) => (item.quantity))
    const displayOrders = tmp.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <Grid container spacing={0.3}>
                <Grid item xs={4}>
                    <Item ><Typography>{item.name}</Typography></Item>
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
                    <Typography variant='h3' sx={{ marginBottom: '25px' }}>Order Details</Typography>
                    <Typography variant='h5' sx={{ marginBottom: '25px' }}>{props.name}</Typography>
                    <Grid container spacing={0.3} sx={{ marginBottom: '20px', border: 'none', boxShadow: 'none' }}>
                        <Grid item xs={4}>
                            <Item><Typography sx={{ fontWeight: 'bold' }}>Name</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><Typography sx={{ fontWeight: 'bold' }}>Quantity</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item><Typography sx={{ fontWeight: 'bold' }}>Price</Typography></Item>
                        </Grid>
                    </Grid>
                    {displayOrders}
                    <Typography variant='h6'>Total Amount : {props.totalAmount}</Typography>
                    <Typography>Date and time : {props.date}</Typography>
                </div>
                <div>
                    <div>
                        <TextField
                            id={props.id}
                            label="Feedback"
                            multiline
                            rows={5}
                            variant="outlined"
                            sx={{ width: '165%', marginTop: '30px' }}
                            value={props.feedback.filter((item) => (item.order_id === props.id))[0].feedback}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button id={props.id} variant='contained' onClick={() => (props.onButtonClick(props.id))} sx={{ marginTop: '50px', marginLeft: '20px', borderRadius: '30px' }}>Submit</Button>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}

export default PastOrder;