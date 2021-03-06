import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default (props) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" >{props.title}</Typography>
            </Toolbar>
        </AppBar>
    )
}
