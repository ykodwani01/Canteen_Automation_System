//importing css
import '../App.css';

//importing MUI cmp
import { Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import Button from '@mui/material/Button';

//importing custom cmp
import theme from '../general_compo/theme.js';
import Order from './order.js';

//importing router
import { Navigate, useParams } from 'react-router-dom';

//importing images
import logo from '../general_compo/logo.png';
import cafe from "../general_compo/cafe.png";

//importing react cmp
import { useEffect, useState } from 'react';

//importing data files
import pending_orders from '../data_files/data.json';

function PendingOrders() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [order, setOrder] = useState()


    const apiUrl = "http://127.0.0.1:8000/get-pending-orders"
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                // Handle the response data here
                console.log(data);
                setOrder(data.map((item) => (<Order key={item.id} name={item.order_cust_name} status={item.status} totalAmount={item.total_amount} items={item.items} />)))
                setIsLoaded(true)
            })
            .catch(error => console.error('Error:', error));
    }, [])

    const id = useParams()

    return (
        <ThemeProvider theme={theme}>
            {/* background */}
            {isLoaded ?
                < div style={{ backgroundColor: '#DED8D8', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    {/* first box */}
                    <div style={{ borderRadius: '108px', marginTop: '70px', backgroundColor: '#EBE7E6', border: '2px solid white', width: '1341px', height: '1332px', boxShadow: '0px 10px 5px darkgrey', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* padding box */}
                        <div style={{ width: '1191px', height: '1232px' }}>
                            {/* header div / Navigation bar */}
                            <div style={{ display: 'flex', height: '70px', justifyContent: 'center', marginTop: '20px' }}>
                                <img src={logo} alt='website logo' style={{ marginRight: '250px', height: '80px' }} />
                                <div style={{ display: 'flex', boxShadow: '0px 2px 0px darkGrey', paddingBottom: '10px', marginTop: '10px' }}>
                                    <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home'>Home</Button>
                                    <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/feedback'>Feedback</Button>
                                    <Button style={{ color: 'black', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/aboutus'>About Us</Button>
                                    <Button style={{ color: 'black', marginRight: '60px', marginTop: '10px', fontWeight: 'bold' }} href='/home/contact'>Contact</Button>
                                    <Button variant='contained' style={{ borderRadius: '30px', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href='/home/account'>Account</Button>
                                    <Button variant='contained' style={{ borderRadius: '50px', marginRight: '20px', marginTop: '10px', fontWeight: 'bold' }} href={`/cownerHome/pendingOrders/${id}`}>Pending Orders</Button>
                                </div>
                            </div>
                            {/* child box of padding box */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '70px' }}>
                                <Typography variant='h2'><u>Pending Orders</u></Typography>
                            </div>
                            {/* child box of padding box */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                {order}
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#C31E2C', width: '100%', marginTop: '70px', paddingTop: '10px' }}>
                        <div style={{ width: '500px', padding: '50px' }}>
                            <img src={cafe} alt='cafe' style={{ width: '200px' }} />
                            <Typography style={{ color: '#DAC6C7' }}>At Quick Cafe our core beliefs drive everything we do. We believe in the power of innovation to revolutionize the way people experience food and dining. We're passionate about harnessing technology to make dining experiences more convenient, efficient, and enjoyable for everyone.</Typography>
                        </div>
                        <div style={{ padding: '50px' }}>
                            <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>Quick links</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Browse Foodtime</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Registrations</Typography>
                        </div>
                        <div style={{ padding: '50px' }}>
                            <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>About</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>About us</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Mission</Typography>
                        </div>
                        <div style={{ padding: '50px' }}>
                            <Typography style={{ color: 'white', fontWeight: 'bold', marginBottom: '50px' }}>Contact</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Facebook</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Twitter</Typography>
                            <Typography style={{ color: '#DAC6C7', marginBottom: '20px' }}>Instagram</Typography>
                        </div>
                    </footer>
                </div> : <div>loading</div>
            }

        </ThemeProvider >
    )
}

export default PendingOrders;