import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 160,
    },
    tags: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        marginTop: '1em',
        marginBottom: '1em',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}));

export default function Articles() {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    const [url] = useState('https://dev.to/api/articles?username=omarmorales');
    const [isLoading, setIsLoading] = useState(false);
    const [tagSelected, setTagSelected] = useState('All');

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true);

            const response  = await fetch(url);

            const articlesData = await response.json();
            setArticles(articlesData);
            setIsLoading(false);
        }
        fetchArticles();
    }, [url]);

    const handleClick = tag => {
        setTagSelected(tag);
    };

    

    return (
        <React.Fragment>
            <Container className={classes.root}>
                <Typography variant="h2" component="h2">
                    My articles
                </Typography>
                <Grid container className={classes.tags}>
                    <Chip 
                        label="All" 
                        color={(tagSelected === 'All') ? 'secondary' : 'default'} 
                        onClick={() => handleClick('All')} 
                    />
                    {
                        [...new Set([].concat.apply([], articles.map(article => 
                            article.tag_list)))
                        ].map(tag => 
                            <Chip 
                                key={tag} 
                                label={tag} 
                                color={(tagSelected === tag) ? 'secondary' : 'default'} 
                                onClick={() => handleClick(tag)} 
                            />
                        )
                    }
                </Grid>
                <Grid container spacing={3}>
                    {
                        !isLoading && articles.map(article => 
                            article.tag_list.includes(tagSelected) || tagSelected === 'All' ? (
                            <Grid key={article.id} item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" src={article.user.profile_image} />
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={article.title}
                                        subheader={article.readable_publish_date}
                                    />
                                    <CardActionArea
                                        component={Link}
                                        to={{ pathname: article.url }}
                                        target="_blank"
                                    >
                                        <CardMedia
                                            className={classes.media}
                                            image={article.social_image}
                                        />
                                    </CardActionArea>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="reactions" disabled>
                                            <Badge badgeContent={article.public_reactions_count} color="error">
                                                <FavoriteIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton aria-label="reactions" disabled>
                                            <Badge badgeContent={article.comments_count} color="error">
                                                <CommentIcon />
                                            </Badge>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                            )
                            : null
                        )
                    }

                    {
                        isLoading && [1,2,3,4,5,6].map(n =>
                            <Grid key={n} item xs={12} sm={6} md={4}>
                                <Box display="flex" alignItems="center">
                                    <Box margin={1}>
                                        <Skeleton variant="circle">
                                            <Avatar />
                                        </Skeleton>
                                    </Box>
                                    <Box width="100%">
                                        <Skeleton width="100%">
                                            <Typography>.</Typography>
                                        </Skeleton>
                                    </Box>
                                </Box>
                                <Skeleton variant="rect" width="100%"  >
                                    <div style={{ paddingTop: '50%' }} />
                                </Skeleton>
                                <Skeleton width="100%">
                                    <Typography>h1</Typography>
                                </Skeleton>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}
