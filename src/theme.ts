import {createTheme} from '@mui/material/styles';
import {blue, purple, red} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue.A200
        },
        secondary: {
            main: purple.A200
        },
        error: {
            main: red.A200
        }
    }
});

export default theme;