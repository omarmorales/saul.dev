import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    customLink: {
        textDecoration: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar color="inherit">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography component={NavLink} to="/" variant="h6" className={ classes.customLink} color="inherit">
                        saul.dev
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Tooltip title="About me" aria-label="about" arrow>
                            <Button component={NavLink} to="/about" color="inherit">About</Button>
                        </Tooltip>
                        <Tooltip title="Articles" aria-label="articles" arrow>
                            <Button component={NavLink} to="/articles" color="inherit">Articles</Button>
                        </Tooltip>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </div>
    )
}
