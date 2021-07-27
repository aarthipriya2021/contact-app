import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:'black'
    },
    
  }));

export const NavBar = () => {
    
      const classes = useStyles();
    //   const preventDefault = (event) => event.preventDefault();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: 'black'}}>
                    <Toolbar variant="dense">
                        <Typography variant="h3" >
                            <Link
                                component="button"
                                variant="body1"
                                style={{ color:'silver', fontSize:'20px',textDecoration: 'none'}}
                                >
                                React Redux Contact App
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
    </div>
        </div>
    )
}

export default NavBar;
