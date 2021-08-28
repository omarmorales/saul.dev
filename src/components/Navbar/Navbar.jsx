import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
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
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Mosa Dev
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Tooltip title="Articles" aria-label="articles" arrow>
                            <IconButton
                                component={Link}
                                to="/articles"
                                color="inherit"
                                aria-label="Articles"
                            >
                                <DescriptionIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </div>
    )
}
