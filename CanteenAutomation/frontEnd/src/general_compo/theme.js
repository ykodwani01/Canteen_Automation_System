//importing MUI cmp
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material';

//defining theme
const theme = createTheme({
    palette: {
        primary: { main: "#C31E2C" },
        secondary: green
    }
})

export default theme;