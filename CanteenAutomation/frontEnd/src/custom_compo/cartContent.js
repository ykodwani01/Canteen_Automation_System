//importing MUI cmp
import { ThemeProvider } from "styled-components";
import { green } from '@mui/material/colors';
import { Button, Typography, createTheme } from '@mui/material/';
import EastIcon from '@mui/icons-material/East';

import Empty_Cart from "../general_compo/empty_cart.png";

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
    border: 'none',
    boxShadow: 'none'
}));


function CartContent(props) {
    const theme = createTheme({
        palette: {
            primary: { main: "#C31E2C" },
            secondary: green
        }
    })

    var cartItems = []
    if (props.cartDetails.length !== 0) {
        cartItems = props.cartDetails.items.map((item) => {
            if (item.quantity !== 0) {
                return (
                    <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Item sx={{ margin: '15px' }}><Typography variant="h6">{item.name}</Typography></Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item sx={{ margin: '15px' }}><Typography variant="h6">{item.quantity}</Typography></Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item sx={{ margin: '15px' }}><Typography variant="h6">{item.price}</Typography></Item>
                            </Grid>
                        </Grid>
                    </div>
                )
            }
            else return ([])
        })
        cartItems = cartItems.filter((item) => (item.length !== 0))
    }

    return (
        <ThemeProvider theme={theme}>
            {/* background */}
            {props.cartDetails.length === 0 || cartItems.length === 0 ? <div> <img src={Empty_Cart} alt='emptycart' style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "70px", paddingLeft: "140px" }} /> <Typography variant="h4" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: "100px", width: "400px", paddingLeft: "55px" }}> Your cart is empty. </Typography> <Typography variant="h6" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: "50px", color: "grey", width: "400px", paddingLeft: "55px" }}> Looks like you haven't made </Typography> <Typography variant="h6" sx={{ display: 'flex', justifyContent: "center", alignItems: "center", color: "grey", width: "400px", paddingLeft: "55px" }}> your menu yet. </Typography> </div> : <div>
                <div style={{ display: 'flex', alignItems: 'center', width: '460px' }}>
                    <Button variant='contained' sx={{ borderRadius: '30px' }} onClick={() => { props.drawerButton(props.anchor, false) }}><EastIcon /></Button>
                    <Typography variant='h5' sx={{ marginLeft: '30px', fontWeight: 'bold' }}>Cart Content : {props.cartDetails.order_canteen_name}</Typography>
                </div>
                {/* box to show items that customer wants to purchase */}
                <div style={{ border: '2px solid white', borderRadius: '30px', width: '460px', margin: '5px', marginTop: '40px', padding: '5px' }}>
                    <Grid container spacing={2} sx={{ marginBottom: '20px', padding: '10px', border: 'none', boxShadow: 'none' }}>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#DED8D8' }}><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Name</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#DED8D8' }}><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Quantity</Typography></Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ backgroundColor: '#DED8D8' }}><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Price</Typography></Item>
                        </Grid>
                    </Grid>
                    {cartItems}
                </div>
                {/* box to show the final summary of the items  */}
                <div style={{ borderRadius: '30px', border: '2px solid white', width: '460px', marign: '5px', padding: '10px', marginTop: '80px', marginBottom: '50px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ margin: '20px', fontWeight: 'bold' }}>Order Summary</Typography>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Subtotal</Typography>
                        <Typography variant="h6">{props.cartDetails.total_amount}</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Convenience fee</Typography>
                        <Typography variant="h6">0</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Tax</Typography>
                        <Typography variant="h6">0</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{props.cartDetails.total_amount}</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button variant='contained' sx={{ borderRadius: '30px', margin: '20px 0px 5px 0px', width: '300px', padding: '10px' }} endIcon={<EastIcon />} onClick={() => (props.payment(props.cartDetails.id))}>Continue to Payment</Button>
                    </div>

                </div>
            </div>}

        </ThemeProvider>
    )
}

export default CartContent;