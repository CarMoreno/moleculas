import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" color="success">
                <Toolbar >
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} textAlign="center">
                        Molecules App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}