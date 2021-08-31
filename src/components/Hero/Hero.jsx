import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import me from "../../resources/img/me.jpeg";

const useStyles = makeStyles((theme) => ({
    hero: {
      minHeight: '95vh',
    },
    backgroundBlack: {
        backgroundColor: 'black !important',
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${me})`,
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '110vh',
        },
    }
}));

function Hero() {
    const classes = useStyles();

    return (
        <div className={classes.backgroundBlack}>
            <Container maxWidth="md">
                <Grid container spacing={3} alignItems="center" className={classes.hero}>
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            <Box fontWeight="fontWeightBold">Hello.</Box>
                            <Box fontWeight="fontWeightBold">I am</Box>
                            <Box fontWeight="fontWeightBold">Saul</Box>
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Hero
