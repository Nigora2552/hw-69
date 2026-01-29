import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const ToolBar = () => {
    return (
        <Box sx={{flexGrow: 1, mb: 5}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component={NavLink} to='/'
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, textDecoration: 'none', color: '#fff'}}
                    >
                        TV Shows
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ToolBar;