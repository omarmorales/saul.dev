import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
import me from "../../resources/img/omar.jpg";
import Avatar from '@material-ui/core/Avatar';

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
        id: 1,
        title: 'Full Stack Developer',
        company: 'Lurn Inc',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQE8WPbOkhu76A/company-logo_200_200/0/1544826129807?e=1640822400&v=beta&t=EQ0xJ99wYU5HJsUGSGLaozoW0vxm0MCTheXs3Bx277M',
    },
    {
        id: 2,
        title: 'Web Developer',
        company: 'Globant',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFuFqPRAj_3Bw/company-logo_200_200/0/1625146228478?e=1640822400&v=beta&t=noddAiCdGYXBgXmvVwsgVCBQyk_GZdRiqFGHZIrrWDA',
    },
    {
        id: 3,
        title: 'Web Developer',
        company: 'C230 Consultores',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHL1sbj8KNr1g/company-logo_200_200/0/1519865935569?e=1640822400&v=beta&t=dXI7yWefikldJbUH2xsEq7k65_aChOldFIaw6pOmMLo',
    },
    {
        id: 4,
        title: 'Database Manager',
        company: 'Embelle PARIS',
        location: 'Mexico City',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQE3vbV2bYfViw/company-logo_100_100/0/1519900923609?e=1640822400&v=beta&t=GchvJFRnuJJHWRQvcTvY3YKT3qrHa09SuCUwSWtIB34',
    },
    {
        id: 5,
        title: 'Frontend Developer',
        company: 'Intic Labs',
        location: 'San Luis Potosi',
        current: true,
        start_date: '',
        en_date: '',
        company_logo: 'https://media-exp1.licdn.com/dms/image/C560BAQEXbMBhy6wRqQ/company-logo_100_100/0/1519904590711?e=1640822400&v=beta&t=BcTgHqdRYVKyf-DsMt9eDtO2857ODg1-EMcL5KpqGgk',
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
                            <IconButton aria-label="linkedin">
                                <GitHubIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Grid item xs={12} className={classes.myPhoto} />
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Timeline align="alternate">
                            {
                                experience.map(position =>
                                    <TimelineItem key={position.id}>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <Avatar aria-label="recipe" src={position.company_logo} />
                                            </TimelineDot>
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
