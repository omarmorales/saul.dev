import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
import me from "../../resources/img/omar.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    myPhoto: {
        height: '40vh;',
        backgroundImage: `url(${me})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        [theme.breakpoints.up('md')]: {
            height: '80vh;',
            backgroundImage: `url(${me})`,
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '150vh',
        },
    }
}));

const experience = [
    {
        title: 'Full Stack Developer',
        company: 'Lurn Inc',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: '',
    },
    {
        title: 'Web Developer',
        company: 'Globant',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: '',
    },
    {
        title: 'Web Developer',
        company: 'C230 Consultores',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: '',
    },
    {
        title: 'Database Manager',
        company: 'Embelle PARIS',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: '',
    },
    {
        title: 'Frontend Developer',
        company: 'Intic Labs',
        location: 'San Luis Potosi',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: '',
    },
    
]

function About() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <Box component="h2" fontWeight="fontWeightBold" fontSize="h2.fontSize" textAlign="center">I build awesome applications</Box>
                    </Grid>
                    <Grid item xs={12} className={classes.myPhoto}>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize="h5.fontSize">
                                Hi, I'm Saul, a software developer with 5+ years of experience from Mexico. I've worked as Back-end developer using Javascript, PhP and Python, as a Front-end developer using HTML, CSS and Javascript and as a Database Manager using SQL and Mongo in different projects in production. I'm passionate about creating products and transforming data into information fot decision making.
                        </Typography>
                        <Typography fontSize="h5.fontSize">
                                You can read more about my biography, expirience, skills, education and much more in the PDF attached bellow:
                        </Typography>
                        <div >
                            <IconButton aria-label="pdf">
                                <PictureAsPdfSharpIcon />
                            </IconButton>
                            <IconButton aria-label="linkedin">
                                <LinkedInIcon />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Timeline align="alternate">
                            {
                                experience.map(position =>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" component="h3" fontStyle="bold">
                                                    {position.title}
                                                </Typography>
                                                <Typography>{position.company}</Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            }
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default About
