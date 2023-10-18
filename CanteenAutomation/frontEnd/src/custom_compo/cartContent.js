//importing MUI cmp
import { ThemeProvider } from "styled-components";
import { green } from '@mui/material/colors';
import { Button, Typography, createTheme } from '@mui/material/';
import EastIcon from '@mui/icons-material/East';

function CartContent(props){
    const theme = createTheme({
        palette: {
            primary: { main: "#C31E2C" },
            secondary: green
        }
    })
    return(
        <ThemeProvider theme={theme}>
            {/* background */}
            <div>
                <Button variant='contained' sx={{borderRadius:'30px'}} onClick ={()=>{props.drawerButton(props.anchor,false)}}><EastIcon/></Button>
                <h2>Cart Content</h2>
                {/* box to show items that customer wants to purchase */}
                <div style={{border:'2px solid white',borderRadius:'30px',width:'460px',margin:'5px',marginTop:'40px',padding:'5px'}}>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <Typography variant="h6">Item name</Typography>
                        <Typography variant="h6">xtimes</Typography>
                        <Typography variant="h6">Price</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <Typography variant="h6">Item name</Typography>
                        <Typography variant="h6">xtimes</Typography>
                        <Typography variant="h6">Price</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <Typography variant="h6">Item name</Typography>
                        <Typography variant="h6">xtimes</Typography>
                        <Typography variant="h6">Price</Typography>
                    </div>
                </div>
                {/* box to show the final summary of the items  */}
                <div style={{borderRadius:'30px', border:'2px solid white',width:'460px',marign:'5px',padding:'10px',marginTop:'80px'}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Typography variant="h4" sx={{margin:'20px',fontWeight:'bold'}}>Order Summary</Typography>
                    </div>
                    
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h6">Subtotal</Typography>
                        <Typography variant="h6">000</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h6">Convenience fee</Typography>
                        <Typography variant="h6">000</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h6">Tax</Typography>
                        <Typography variant="h6">000</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Total</Typography>
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>000</Typography>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Button variant='contained' sx={{borderRadius:'30px',margin:'20px 0px 5px 0px',width:'300px',padding:'10px'}} endIcon={<EastIcon/>}>Continue to Payment</Button>
                    </div>
                    
                </div>
            </div>
        </ThemeProvider>
    )
}

export default CartContent;